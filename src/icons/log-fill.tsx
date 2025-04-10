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
      width="{size}"
      height="{size}"
      fill="currentColor"
      otherProps="{...otherProps}"
    >
      <Rect width="256" height="256" fill="none" />
      <Path d="M212,136a12,12,0,1,1-12-12A12,12,0,0,1,212,136Zm36,0c0,40.37-21.08,72-48,72H56c-26.92,0-48-31.63-48-72S29.08,64,56,64H92.69l37.65-37.66A8,8,0,0,1,136,24h32a8,8,0,0,1,0,16H139.31l-24,24H200C226.92,64,248,95.63,248,136Zm-144-8a8,8,0,0,0,0-16H33.26a8,8,0,1,0,0,16Zm50.91,32a8,8,0,0,0-8-8H80a8,8,0,0,0,0,16h66.91A8,8,0,0,0,154.91,160ZM232,136c0-30.36-14.65-56-32-56s-32,25.64-32,56,14.65,56,32,56S232,166.36,232,136Z" />
    </Svg>
  )
}

Icon.displayName = 'LogFill'

export const LogFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
