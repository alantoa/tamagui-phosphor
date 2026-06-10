# 🥚 Tamagui Phosphor Icons

A Tamagui-themed icon library for [Phosphor Icons](https://phosphoricons.com).

> Requires **Tamagui v2** and **React 19**. For Tamagui v1, use `tamagui-phosphor@0.1.x`.

## Installation

```bash
npm install tamagui-phosphor react-native-svg
# or
yarn add tamagui-phosphor react-native-svg
# or
pnpm add tamagui-phosphor react-native-svg
# or
bun add tamagui-phosphor react-native-svg
```

## Usage

```tsx
import { House } from 'tamagui-phosphor';
import { Button } from 'tamagui';

export default function App() {
  return <Button icon={House}>House</Button>;
}
```

You can also import a single icon directly — useful with bundlers that don't
tree-shake (e.g. Metro), so only that icon is bundled:

```tsx
import { House } from 'tamagui-phosphor/icons/House';
```

Icon variants are suffixed: `House` (regular), `HouseBold`, `HouseFill`.

## Features

- Full Tamagui theme system support
- Includes all Phosphor Icons (regular, bold, fill)
- React Native and web support (esm / cjs / native builds)
- Per-icon entry points for tree-shaking-free bundlers
- Type-safe

## Props

Icon components accept the following props:

- `size`: Size of the icon (number)
- `color`: Color of the icon (string)
- All other Tamagui icon props

## Development

```bash
# Generate icons (also updates the per-icon exports map in package.json)
bun generate

# Build esm/cjs/native bundles and types
bun run build

# Release new version
bun release
```

## License

MIT © [Alan Toa](https://github.com/alantoa)
