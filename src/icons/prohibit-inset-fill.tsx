import React, { memo } from 'react'
import PropTypes from 'prop-types'
import type { NamedExoticComponent } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 256 256" {...otherProps}>
      <Rect width="256" height="256" fill="none" />
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,141.66a8,8,0,0,1-11.32,0l-64-64a8,8,0,0,1,11.32-11.32l64,64A8,8,0,0,1,165.66,165.66Z" />
    </Svg>
  )
}

Icon.displayName = 'ProhibitInsetFill'

export const ProhibitInsetFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
