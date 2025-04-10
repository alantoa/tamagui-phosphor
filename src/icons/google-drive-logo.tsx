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
      <Path
        d="M93.65,35.76A8,8,0,0,1,100.43,32h55.14a8,8,0,0,1,6.78,3.76l68.43,112.18a8,8,0,0,1,.17,8.21L203.62,204a8,8,0,0,1-6.94,4H59.32a8,8,0,0,1-6.94-4L25.05,156.15a8,8,0,0,1,.17-8.21Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="55.12"
        y1="206.8"
        x2="159.41"
        y2="32.98"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="200.88"
        y1="206.8"
        x2="96.59"
        y2="32.98"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="24"
        y1="152"
        x2="232"
        y2="152"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'GoogleDriveLogo'

export const GoogleDriveLogo: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
