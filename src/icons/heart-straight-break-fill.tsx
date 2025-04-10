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
      <SvgRect width="256" height="256" fill="none" />
      <SvgPath d="M113.29,55.31A58,58,0,0,0,32.93,139l89.37,90.66a8,8,0,0,0,11.4,0L223,139a58,58,0,0,0-82-82.1h0l-24.4,23L143,106.32a8,8,0,0,1,0,11.32l-20.69,20.69A8,8,0,1,1,111,127l15-15L99.5,85.42a8,8,0,0,1,.22-11.53l13.55-12.78a4,4,0,0,0,0-5.8Z" />
    </Svg>
  )
}

Icon.displayName = 'HeartStraightBreakFill'

export const HeartStraightBreakFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
