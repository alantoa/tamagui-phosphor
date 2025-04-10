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
      <Path d="M158.32,45.36l9.41-35.3A8,8,0,0,0,158.32.18,195.87,195.87,0,0,0,99.67,25.27C60.63,50.37,40,85.89,40,128a88.11,88.11,0,0,0,57.68,82.64l-9.41,35.3a8,8,0,0,0,9.41,9.88,195.87,195.87,0,0,0,58.65-25.09C195.37,205.63,216,170.11,216,128A88.1,88.1,0,0,0,158.32,45.36ZM128,152a24,24,0,1,1,24-24A24,24,0,0,1,128,152Z" />
    </Svg>
  )
}

Icon.displayName = 'HurricaneFill'

export const HurricaneFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
