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
      <SvgPath d="M136,52a28,28,0,1,1,28,28A28,28,0,0,1,136,52Zm87.67,70.25a8,8,0,0,1-9.93,5.42l-79.07-23.26-7.78,11.67,35.33,10.23a8,8,0,0,1,4.42,12.14l-19.75,29.44,50.89,14.75A25.32,25.32,0,0,1,216,206.81,25.28,25.28,0,0,1,190.79,232a25.88,25.88,0,0,1-7.14-1L26.21,185.35A25.32,25.32,0,0,1,8,161.18,25.25,25.25,0,0,1,40.34,137l44.73,13,33.52-50.28-40.85-12a8,8,0,1,1,4.52-15.35l136,40A8,8,0,0,1,223.67,122.25ZM117.58,130l-16.4,24.6,29.58,8.58,16.49-24.59Z" />
    </Svg>
  )
}

Icon.displayName = 'PersonSimpleSnowboardFill'

export const PersonSimpleSnowboardFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
