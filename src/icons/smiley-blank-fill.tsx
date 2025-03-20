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
      <SvgPath d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24ZM92,120a12,12,0,1,1,12-12A12,12,0,0,1,92,120Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,120Z" />
    </Svg>
  )
}

Icon.displayName = 'SmileyBlankFill'

export const SmileyBlankFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
