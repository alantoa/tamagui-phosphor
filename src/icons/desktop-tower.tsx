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
        d="M144,184H32a16,16,0,0,1-16-16V96A16,16,0,0,1,32,80H144"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="112"
        y1="216"
        x2="64"
        y2="216"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="208"
        y1="72"
        x2="176"
        y2="72"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="208"
        y1="104"
        x2="176"
        y2="104"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Rect
        x="144"
        y="40"
        width="96"
        height="176"
        rx="8"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="88"
        y1="184"
        x2="88"
        y2="216"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="192" cy="180" r="12" />
    </Svg>
  )
}

Icon.displayName = 'DesktopTower'

export const DesktopTower: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
