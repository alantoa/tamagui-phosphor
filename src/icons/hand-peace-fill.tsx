import React, { memo } from 'react'
import PropTypes from 'prop-types'
import type { NamedExoticComponent } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      viewBox="0 0 256 256"
      width="{size}"
      height="{size}"
      fill="currentColor"
      otherProps="{...otherProps}"
    >
      <Rect width="256" height="256" fill="none" />
      <Path d="M96.55,36.14a16,16,0,0,1,11-19.52c8.61-2.46,17.65,3,20,11.65l16,59.78a4,4,0,0,1-3.18,5A31.79,31.79,0,0,0,128,98c-.56.37-1.1.76-1.64,1.17-.33-.58-.67-1.16-1-1.72a31.74,31.74,0,0,0-14-11.72,3.94,3.94,0,0,1-2.25-2.62ZM80.4,176.65a16.17,16.17,0,0,0,3.23.33A16,16,0,0,0,86.8,145.3l-19.59-4a16,16,0,0,0-6.41,31.35Zm-19.6-53,34.64,7.07a16,16,0,1,0,6.4-31.35L67.21,92.33A16,16,0,0,0,48.33,104.8,16,16,0,0,0,60.8,123.68Zm102-28.16,23.55,4.81A4,4,0,0,0,191,97.44l16.42-61.3a16,16,0,0,0-30.91-8.28l-16.8,62.7A4,4,0,0,0,162.81,95.52Zm37.34,31.74a23.89,23.89,0,0,0-15.67-11L148.87,109a16,16,0,0,0-15.12,5,14,14,0,0,0-2.43,3.57,16,16,0,0,0,1.72,17,16.5,16.5,0,0,0,9.8,5.93l15.24,3.11a8.06,8.06,0,0,1,6.32,9.36,28,28,0,0,0,2.77,19,8.19,8.19,0,0,1-1.93,10.41,8,8,0,0,1-11.94-2.43,44,44,0,0,1-5.48-22.09L139.27,156A31.78,31.78,0,0,1,119,142.32c-.38-.57-.73-1.15-1.06-1.74a32.12,32.12,0,0,1-6.87,4A32,32,0,0,1,83.63,193a32.32,32.32,0,0,1-6.43-.65l-19.59-4h-.06a2.61,2.61,0,0,0-3,3.57A80.19,80.19,0,0,0,128,240h.61c43.77-.33,79.39-36.62,79.39-80.9v-3.34A55.72,55.72,0,0,0,200.15,127.26Z" />
    </Svg>
  )
}

Icon.displayName = 'HandPeaceFill'

export const HandPeaceFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
