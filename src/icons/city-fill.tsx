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
      <Path d="M240,208h-8V88a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v40H104V40a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,184a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm64,96a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm64,0a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Z" />
    </Svg>
  )
}

Icon.displayName = 'CityFill'

export const CityFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
