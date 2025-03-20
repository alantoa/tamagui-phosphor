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
      <SvgPath d="M221.66,122.34l-80-80A8,8,0,0,0,128,48v60.69L61.66,42.34A8,8,0,0,0,48,48V208a8,8,0,0,0,13.66,5.66L128,147.31V208a8,8,0,0,0,13.66,5.66l80-80A8,8,0,0,0,221.66,122.34Z" />
    </Svg>
  )
}

Icon.displayName = 'CaretDoubleRightFill'

export const CaretDoubleRightFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
