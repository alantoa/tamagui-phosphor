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
      <Path
        d="M72,24H184a8,8,0,0,1,8,8V77.33a8,8,0,0,1-1.6,4.8l-20.8,27.74a8,8,0,0,0-1.6,4.8V224a8,8,0,0,1-8,8H96a8,8,0,0,1-8-8V114.67a8,8,0,0,0-1.6-4.8L65.6,82.13a8,8,0,0,1-1.6-4.8V32A8,8,0,0,1,72,24Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="128"
        y1="120"
        x2="128"
        y2="152"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="64"
        y1="64"
        x2="192"
        y2="64"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'Flashlight'

export const Flashlight: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
