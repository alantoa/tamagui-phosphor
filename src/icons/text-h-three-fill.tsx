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
      <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,160a8,8,0,0,1-16,0V128H72v32a8,8,0,0,1-16,0V80a8,8,0,0,1,16,0v32h40V80a8,8,0,0,1,16,0Zm40,24a32,32,0,0,1-21.34-8.15,8,8,0,1,1,10.68-11.92A16,16,0,1,0,168,136a8,8,0,0,1-6.4-12.8L176,104H152a8,8,0,0,1,0-16h40a8,8,0,0,1,6.4,12.8l-16.71,22.28A32,32,0,0,1,168,184Z" />
    </Svg>
  )
}

Icon.displayName = 'TextHThreeFill'

export const TextHThreeFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
