import React, { memo } from 'react'
import PropTypes from 'prop-types'
import type { NamedExoticComponent } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import {
  Svg,
  Circle as _Circle,
  Ellipse as SvgEllipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path as SvgPath,
  Polygon as SvgPolygon,
  Polyline as SvgPolyline,
  Rect as SvgRect,
  Symbol as SvgSymbol,
  Text as _Text,
  Use,
  Defs,
  Stop as SvgStop,
} from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="currentColor"
      {...otherProps}
    >
      <SvgRect width={size} height={size} fill="none" />
      <_Circle cx="64" cy="48" r="16" />
      <_Circle cx="128" cy="48" r="16" />
      <_Circle cx="192" cy="48" r="16" />
      <_Circle cx="64" cy="104" r="16" />
      <_Circle cx="128" cy="104" r="16" />
      <_Circle cx="192" cy="104" r="16" />
      <_Circle cx="64" cy="160" r="16" />
      <_Circle cx="128" cy="160" r="16" />
      <_Circle cx="128" cy="216" r="16" />
      <_Circle cx="192" cy="160" r="16" />
    </Svg>
  )
}

Icon.displayName = 'Numpad'

export const Numpad: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
