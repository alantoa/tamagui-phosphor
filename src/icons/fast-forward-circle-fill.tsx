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
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm68.8,110.4-48,36A8,8,0,0,1,144,172a8,8,0,0,1-8-8V128a8,8,0,0,1-3.2,6.4l-48,36A8,8,0,0,1,80,172a8,8,0,0,1-8-8V92a8,8,0,0,1,12.8-6.4l48,36A8,8,0,0,1,136,128V92a8,8,0,0,1,12.8-6.4l48,36a8,8,0,0,1,0,12.8Z" />
    </Svg>
  )
}

Icon.displayName = 'FastForwardCircleFill'

export const FastForwardCircleFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
