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
      <Path d="M112,136V72h19.47a16.09,16.09,0,0,1,13.72,7.77L165.72,114a16.06,16.06,0,0,1,2.28,8.24V216a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V122.22A16.06,16.06,0,0,1,42.28,114L62.81,79.77A16.09,16.09,0,0,1,76.53,72H96v64a8,8,0,0,0,16,0Zm112,24a16,16,0,0,1-16-16V64A56,56,0,0,0,96,64v8h16V64a40,40,0,0,1,80,0v80a32,32,0,0,0,32,32,8,8,0,0,0,0-16Z" />
    </Svg>
  )
}

Icon.displayName = 'TeaBagFill'

export const TeaBagFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
