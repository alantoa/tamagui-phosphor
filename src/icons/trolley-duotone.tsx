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
      <SvgPath
        d="M48,72H224a16,16,0,0,1,16,16v96a0,0,0,0,1,0,0H48a0,0,0,0,1,0,0V72A0,0,0,0,1,48,72Z"
        opacity="0.2"
      />
      <_Circle cx="72" cy="224" r="16" />
      <_Circle cx="216" cy="224" r="16" />
      <SvgPath
        d="M24,48,45.66,69.66A8,8,0,0,1,48,75.31V184"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="32"
        y1="184"
        x2="240"
        y2="184"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'TrolleyDuotone'

export const TrolleyDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
