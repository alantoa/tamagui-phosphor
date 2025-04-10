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
      <Path d="M184,16H72A16,16,0,0,0,56,32V77.33a16.12,16.12,0,0,0,3.2,9.6L80,114.67V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V114.67l20.8-27.74a16.12,16.12,0,0,0,3.2-9.6V32A16,16,0,0,0,184,16ZM136,152a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0ZM72,56V32H184V56Z" />
    </Svg>
  )
}

Icon.displayName = 'FlashlightFill'

export const FlashlightFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
