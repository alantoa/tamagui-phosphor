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
      <SvgPath d="M213.66,53.66,179.31,88l18.35,18.34A8,8,0,0,1,192,120H144a8,8,0,0,1-8-8V64a8,8,0,0,1,13.66-5.66L168,76.69l34.34-34.35a8,8,0,0,1,11.32,11.32ZM112,136H64a8,8,0,0,0-5.66,13.66L76.69,168,42.34,202.34a8,8,0,0,0,11.32,11.32L88,179.31l18.34,18.35A8,8,0,0,0,120,192V144A8,8,0,0,0,112,136Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowsInSimpleFill'

export const ArrowsInSimpleFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
