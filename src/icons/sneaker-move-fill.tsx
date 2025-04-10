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
      <Path d="M70.8,184H32a8,8,0,0,1,0-16H70.8a8,8,0,1,1,0,16Zm32,16H48a8,8,0,0,0,0,16h54.8a8,8,0,1,0,0-16Zm128.36-33.37-28.63-14.31A47.74,47.74,0,0,1,176,109.39V80a8,8,0,0,0-7.93-8A48.05,48.05,0,0,1,120,24.07a8,8,0,0,0-12.83-6.44L45.11,64.68a4,4,0,0,0-.41,6l51.44,51.44a8.19,8.19,0,0,1,.6,11.09,8,8,0,0,1-11.71.43l-53-53a4,4,0,0,0-6.44,1.09,16,16,0,0,0,3.12,18.22L142.4,213.66a8,8,0,0,0,5.66,2.34H224a16,16,0,0,0,16-16V180.94A15.92,15.92,0,0,0,231.16,166.63Z" />
    </Svg>
  )
}

Icon.displayName = 'SneakerMoveFill'

export const SneakerMoveFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
