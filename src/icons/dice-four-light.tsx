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
        x="40"
        y="40"
        width="176"
        height="176"
        rx="24"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <_Circle cx="100" cy="100" r="10" />
      <_Circle cx="156" cy="100" r="10" />
      <_Circle cx="100" cy="156" r="10" />
      <_Circle cx="156" cy="156" r="10" />
    </Svg>
  )
}

Icon.displayName = 'DiceFourLight'

export const DiceFourLight: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
