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
      <Line
        x1="128"
        y1="72"
        x2="128"
        y2="96"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        d="M48,96H208a16,16,0,0,1,16,16v23.33c0,17.44-13.67,32.18-31.1,32.66A32,32,0,0,1,160,136a32,32,0,0,1-64,0,32,32,0,0,1-32.9,32C45.67,167.51,32,152.77,32,135.33V112A16,16,0,0,1,48,96Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        d="M216,156.9V200a16,16,0,0,1-16,16H56a16,16,0,0,1-16-16V156.9"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        d="M152,48a24,24,0,0,1-48,0c0-24,24-36,24-36S152,24,152,48Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'CakeBold'

export const CakeBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
