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
      <_Circle
        cx="160"
        cy="48"
        r="20"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        d="M12,200,85.1,75.94a8,8,0,0,1,13.8,0L172,200Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        d="M146.62,156.94l29-49a8,8,0,0,1,13.76,0L244,200H172"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Line
        x1="54.43"
        y1="128"
        x2="129.57"
        y2="128"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'MountainsBold'

export const MountainsBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
