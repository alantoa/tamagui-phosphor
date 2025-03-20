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
      <SvgPath d="M203.06,40.61a8,8,0,0,0-8.72,1.73L128,108.69V48a8,8,0,0,0-13.66-5.66l-80,80a8,8,0,0,0,0,11.32l80,80A8,8,0,0,0,128,208V147.31l66.34,66.35A8,8,0,0,0,208,208V48A8,8,0,0,0,203.06,40.61Z" />
    </Svg>
  )
}

Icon.displayName = 'CaretDoubleLeftFill'

export const CaretDoubleLeftFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
