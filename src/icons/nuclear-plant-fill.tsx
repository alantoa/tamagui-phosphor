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
      <Path d="M152,32h24a8,8,0,0,0,8-8,8,8,0,0,1,16,0,24,24,0,0,1-24,24H152a8,8,0,0,0-8,8,8,8,0,0,1-16,0A24,24,0,0,1,152,32ZM104,64a8,8,0,0,0,8-8,40,40,0,0,1,40-40h8a8,8,0,0,0,0-16h-8A56.06,56.06,0,0,0,96,56,8,8,0,0,0,104,64ZM248,216a8,8,0,0,1-8,8H16a8,8,0,0,1,0-16H32.74c13.77-27.83,29.48-68.69,31.12-112.66A15.91,15.91,0,0,1,79.85,80h88.33a16,16,0,0,1,16,15.28c2.1,47.84,23.84,92.37,35.29,112.72H240A8,8,0,0,1,248,216ZM168.18,96h-16c1.77,43.72,17.39,84.32,31.09,112h18C188.68,184.08,170.18,141.64,168.18,96Z" />
    </Svg>
  )
}

Icon.displayName = 'NuclearPlantFill'

export const NuclearPlantFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
