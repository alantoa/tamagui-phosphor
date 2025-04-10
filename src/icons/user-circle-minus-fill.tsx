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
      <Path d="M128,76a44,44,0,1,1-44,44A44,44,0,0,1,128,76Zm48-12h48a8,8,0,0,0,0-16H176a8,8,0,0,0,0,16Zm39.87,24.46A8,8,0,0,0,211,98.67a88,88,0,0,1-17.23,87.74A79.86,79.86,0,0,0,172,165.1a4,4,0,0,0-4.84.32,59.81,59.81,0,0,1-78.27,0A4,4,0,0,0,84,165.1a79.71,79.71,0,0,0-21.79,21.31A88,88,0,0,1,128,40a88.76,88.76,0,0,1,14.68,1.22,8,8,0,0,0,2.64-15.78,103.9,103.9,0,1,0,80.76,67.89A8,8,0,0,0,215.87,88.46Z" />
    </Svg>
  )
}

Icon.displayName = 'UserCircleMinusFill'

export const UserCircleMinusFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
