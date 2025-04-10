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
      width="{size}"
      height="{size}"
      fill="currentColor"
      otherProps="{...otherProps}"
    >
      <Rect width="256" height="256" fill="none" />
      <Line
        x1="112"
        y1="232"
        x2="216"
        y2="232"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        d="M100.84,76.42a8,8,0,0,0,0,7.16l31.78,64a8,8,0,0,0,7.16,4.42H208a8,8,0,0,1,8,8v28a8,8,0,0,1-8,8H112.11a8,8,0,0,1-7.15-4.42l-56.12-112a8,8,0,0,1,0-7.16L71,28.42a8,8,0,0,1,10.73-3.57l29.89,14.31a8,8,0,0,1,3.57,10.73Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'SeatBold'

export const SeatBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
