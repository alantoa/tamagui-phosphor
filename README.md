# 🥚 Tamagui Phosphor Icons

A Tamagui-themed icon library for [Phosphor Icons](https://phosphoricons.com).

## Installation

```bash
npm install tamagui-phosphor phosphor-react-native
# or
yarn add tamagui-phosphor phosphor-react-native
# or
pnpm add tamagui-phosphor phosphor-react-native
# or
bun add tamagui-phosphor phosphor-react-native
```

## Usage

```tsx
import * as Phosphor from './index';
import { Button } from 'tamagui';

export default function App() {
  return <Button icon={Phosphor.House}>House</Button>;
}
```

## Features

- Full Tamagui theme system support
- Includes all Phosphor Icons
- React Native support
- Type-safe
- Automatically renames reserved icon names to avoid conflicts

## Props

Icon components accept the following props:

- `size`: Size of the icon (number)
- `color`: Color of the icon (string)
- `weight`: Weight of the icon ('thin' | 'light' | 'regular' | 'bold' | 'fill')
- All other Tamagui icon props

## Development

```bash
# Generate icons
bun generate

# Run tests
bun test

# Release new version
bun release
```

## License

MIT © [Alan Toa](https://github.com/alantoa)
