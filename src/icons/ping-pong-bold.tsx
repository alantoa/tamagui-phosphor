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
        d="M134.58,206.59A31.78,31.78,0,0,1,106,215.41C63.4,207,31.38,167.92,32,122.69c.69-49.55,41.13-90,90.68-90.68,45.23-.63,84.27,31.39,92.72,74a31.78,31.78,0,0,1-8.82,28.58L185,156.21l43.69,34.64a8,8,0,0,1,1,12.16L203,229.66a8,8,0,0,1-12.16-1L156.21,185Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Line
        x1="203.68"
        y1="76.32"
        x2="76.32"
        y2="203.68"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'PingPongBold'

export const PingPongBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
