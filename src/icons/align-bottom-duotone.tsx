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
    <Svg viewBox="0 0 256 256" {...otherProps}>
      <SvgRect width="256" height="256" fill="none" />
      <SvgRect
        x="116"
        y="100"
        width="112"
        height="56"
        rx="8"
        transform="translate(44 300) rotate(-90)"
        opacity="0.2"
      />
      <SvgRect x="56" y="32" width="56" height="152" rx="8" opacity="0.2" />
      <Line
        x1="216"
        y1="216"
        x2="40"
        y2="216"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgRect
        x="116"
        y="100"
        width="112"
        height="56"
        rx="8"
        transform="translate(44 300) rotate(-90)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgRect
        x="56"
        y="32"
        width="56"
        height="152"
        rx="8"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'AlignBottomDuotone'

export const AlignBottomDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
