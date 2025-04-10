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
        d="M160,216V122.22a8,8,0,0,0-1.14-4.12L138.33,83.88A8,8,0,0,0,131.47,80H76.53a8,8,0,0,0-6.86,3.88L49.14,118.1A8,8,0,0,0,48,122.22V216a8,8,0,0,0,8,8h96A8,8,0,0,0,160,216Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        d="M224,168h0a24,24,0,0,1-24-24V64a48,48,0,0,0-48-48h0a48,48,0,0,0-48,48v72"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'TeaBagBold'

export const TeaBagBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
