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
    <Svg viewBox="0 0 256 256" width={size} height={size} {...otherProps}>
      <SvgRect width={size} height={size} fill="none" />
      <SvgRect
        x="40"
        y="40"
        width={size}
        height={size}
        rx="24"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="92" cy="84" r="12" />
      <_Circle cx="164" cy="84" r="12" />
      <_Circle cx="92" cy="128" r="12" />
      <_Circle cx="164" cy="128" r="12" />
      <_Circle cx="92" cy="172" r="12" />
      <_Circle cx="164" cy="172" r="12" />
    </Svg>
  )
}

Icon.displayName = 'DiceSix'

export const DiceSix: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
