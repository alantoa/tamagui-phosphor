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
      <Line
        x1="40"
        y1="108"
        x2="216"
        y2="108"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <SvgPath
        d="M156,152a8,8,0,0,0-7.92,9.13L152,208a24,24,0,0,1-48,0l3.92-46.87A8,8,0,0,0,100,152H56a16,16,0,0,1-16-16V64A32,32,0,0,1,72,32H216V136a16,16,0,0,1-16,16Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Line
        x1="172"
        y1="32"
        x2="172"
        y2="68"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'PaintBrushBroadBold'

export const PaintBrushBroadBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
