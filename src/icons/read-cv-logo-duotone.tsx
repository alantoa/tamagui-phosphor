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
        x="53.87"
        y="34.21"
        width="148.27"
        height="187.59"
        rx="8"
        transform="translate(24.22 -20.31) rotate(10.02)"
        opacity="0.2"
      />
      <SvgRect
        x="53.87"
        y="34.21"
        width="148.27"
        height="187.59"
        rx="8"
        transform="translate(24.22 -20.31) rotate(10.02)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="97.22"
        y1="59.81"
        x2="180.2"
        y2="74.47"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="174.66"
        y1="105.98"
        x2="91.67"
        y2="91.33"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="127.62"
        y1="130.17"
        x2="86.13"
        y2="122.84"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'ReadCvLogoDuotone'

export const ReadCvLogoDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
