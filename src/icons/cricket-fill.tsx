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
      <Path d="M243.31,81.37,190.63,28.69a16,16,0,0,0-22.63,0L60.69,136a16,16,0,0,0,0,22.63l20.68,20.68-47,47a8,8,0,0,0,11.32,11.32l47-47,20.68,20.68a16,16,0,0,0,22.63,0L243.31,104a16,16,0,0,0,0-22.63ZM124.69,200,104,179.31l29.66-29.65a8,8,0,0,0-11.32-11.32L92.69,168,72,147.31,107.31,112H160v52.69ZM32,60A28,28,0,1,1,60,88,28,28,0,0,1,32,60Z" />
    </Svg>
  )
}

Icon.displayName = 'CricketFill'

export const CricketFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
