import { Text, YStack, XStack, ScrollView, Input } from 'tamagui';
import { FlatList, ListRenderItem } from 'react-native';
import * as Icons from 'tamagui-phosphor';
import { useState, useCallback, useEffect, useMemo, memo } from 'react';
import useDebounce from './use-debouce';

type TabType = 'Regular' | 'Bold' | 'Fill';
type IconType = [string, any];
type IconItemProps = {
  name: string;
  Icon: any;
  activeTab: TabType;
};

const ICON_SIZE = 100;
const NUM_COLUMNS = 6;
const INITIAL_NUM_TO_RENDER = 24;
const WINDOW_SIZE = 5;
const ITEM_HEIGHT = ICON_SIZE + 16;
const DEBOUNCE_DELAY = 300;

const IconItem = memo(({ name, Icon, activeTab }: IconItemProps) => {
  return (
    <YStack
      width={ICON_SIZE}
      height={ICON_SIZE}
      space="$2"
      borderWidth={1}
      borderColor="$color4"
      animation="quick"
      p="$2"
    >
      <YStack
        style={{
          alignItems: 'center',
          justifyContent: 'center',
        }}
        flex={1}
      >
        <Icon size={24} color="red" />
      </YStack>
      <Text fontSize="$2" color="$color11" numberOfLines={1} p="$2">
        {name.replace(activeTab, '')}
      </Text>
    </YStack>
  );
});

const TabButton = memo(
  ({
    tab,
    activeTab,
    count,
    onPress,
  }: {
    tab: TabType;
    activeTab: TabType;
    count: number;
    onPress: () => void;
  }) => (
    <YStack
      bg={activeTab === tab ? '$color4' : 'transparent'}
      p="$2"
      px="$4"
      style={{
        borderRadius: 8,
        cursor: 'pointer',
      }}
      pressStyle={{ scale: 0.95 }}
      onPress={onPress}
    >
      <Text
        color={activeTab === tab ? '$color12' : '$color11'}
        fontWeight={activeTab === tab ? 'bold' : 'normal'}
      >
        {tab} ({count})
      </Text>
    </YStack>
  )
);

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState<TabType>('Regular');
  const debouncedQuery = useDebounce(searchQuery, DEBOUNCE_DELAY);

  const groupedIcons = useMemo(() => {
    return Object.entries(Icons).reduce(
      (acc, [name, Icon]) => {
        if (name.includes('Bold')) {
          acc.Bold.push([name, Icon]);
        } else if (name.includes('Fill')) {
          acc.Fill.push([name, Icon]);
        } else {
          acc.Regular.push([name, Icon]);
        }
        return acc;
      },
      {
        Bold: [] as IconType[],
        Fill: [] as IconType[],
        Regular: [] as IconType[],
      }
    );
  }, []);

  const filteredIcons = useMemo(() => {
    return groupedIcons[activeTab].filter(([name]) =>
      name.toLowerCase().includes(debouncedQuery.toLowerCase())
    );
  }, [activeTab, debouncedQuery, groupedIcons]);

  const getItemLayout = useCallback(
    (_, index) => ({
      length: ITEM_HEIGHT,
      offset: ITEM_HEIGHT * Math.floor(index / NUM_COLUMNS),
      index,
    }),
    []
  );

  const renderItem: ListRenderItem<IconType> = useCallback(
    ({ item: [name, Icon] }) => (
      <IconItem name={name} Icon={Icon} activeTab={activeTab} />
    ),
    [activeTab]
  );

  const keyExtractor = useCallback((item: IconType) => item[0], []);

  const handleTabPress = useCallback((tab: TabType) => {
    setActiveTab(tab);
  }, []);

  return (
    <YStack bg="$color1" flex={1}>
      <YStack p="$4" space="$4">
        <Text fontSize="$8" fontWeight="bold">
          Phosphor Icons
        </Text>
        <XStack space="$2">
          {(['Regular'] as const).map((tab) => (
            <TabButton
              key={tab}
              tab={tab}
              activeTab={activeTab}
              count={groupedIcons[tab].length}
              onPress={() => handleTabPress(tab)}
            />
          ))}
        </XStack>
        <Input
          size="$4"
          borderWidth={2}
          placeholder="Search icons..."
          onChangeText={setSearchQuery}
          value={searchQuery}
        />
      </YStack>

      <FlatList
        data={filteredIcons}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        numColumns={NUM_COLUMNS}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          padding: 16,
          alignItems: 'center',
        }}
        columnWrapperStyle={{
          gap: 8,
        }}
        initialNumToRender={INITIAL_NUM_TO_RENDER}
        maxToRenderPerBatch={NUM_COLUMNS * 2}
        windowSize={WINDOW_SIZE}
        updateCellsBatchingPeriod={10}
        removeClippedSubviews={true}
        getItemLayout={getItemLayout}
      />
    </YStack>
  );
}
