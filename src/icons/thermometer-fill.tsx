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
      <SvgPath d="M212,56a28,28,0,1,0,28,28A28,28,0,0,0,212,56Zm0,40a12,12,0,1,1,12-12A12,12,0,0,1,212,96Zm-60,50.08V40a32,32,0,0,0-64,0V146.08a56,56,0,1,0,64,0ZM136,104H104V40a16,16,0,0,1,32,0Z" />
    </Svg>
  )
}

Icon.displayName = 'ThermometerFill'

export const ThermometerFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
