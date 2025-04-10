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
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="currentColor"
      {...otherProps}
    >
      <Rect width="256" height="256" fill="none" />
      <Path d="M56,120H216a16,16,0,0,0,6.23-30.74l-.14-.06-159.93-64A16,16,0,0,0,40,40v64A16,16,0,0,0,56,120Zm0-80,.15.06L216,104H56l0-64ZM231.67,148.82a15.85,15.85,0,0,1-9.45,17.92l-.14.06-159.93,64A16,16,0,0,1,40,216V152a16,16,0,0,1,16-16H216A15.85,15.85,0,0,1,231.67,148.82Z" />
    </Svg>
  )
}

Icon.displayName = 'FlipVerticalFill'

export const FlipVerticalFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
