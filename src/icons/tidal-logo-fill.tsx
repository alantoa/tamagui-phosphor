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
      <SvgPath d="M253.66,101.66l-36,36a8,8,0,0,1-11.32,0l-36-36-.34-.38-.34.38L135.31,136l34.35,34.34a8,8,0,0,1,0,11.32l-36,36a8,8,0,0,1-11.32,0l-36-36a8,8,0,0,1,0-11.32L120.69,136,86.34,101.66l-.34-.38-.34.38-36,36a8,8,0,0,1-11.32,0l-36-36a8,8,0,0,1,0-11.32l36-36a8,8,0,0,1,11.32,0l36,36,.34.38.34-.38,36-36a8,8,0,0,1,11.32,0l36,36,.34.38.34-.38,36-36a8,8,0,0,1,11.32,0l36,36A8,8,0,0,1,253.66,101.66Z" />
    </Svg>
  )
}

Icon.displayName = 'TidalLogoFill'

export const TidalLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
