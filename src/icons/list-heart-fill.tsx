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
      <SvgPath d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,184H64a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16ZM56,128a8,8,0,0,1,8-8H96a8,8,0,0,1,0,16H64A8,8,0,0,1,56,128Zm105.79,57.58a4,4,0,0,1-3.58,0C156.65,184.8,120,166.17,120,140a22,22,0,0,1,40-12.64A22,22,0,0,1,200,140C200,166.17,163.35,184.8,161.79,185.58ZM192,88H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z" />
    </Svg>
  )
}

Icon.displayName = 'ListHeartFill'

export const ListHeartFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
