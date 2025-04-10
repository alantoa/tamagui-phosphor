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
      <Line
        x1="24"
        y1="216"
        x2="168"
        y2="216"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        d="M88,112.51,58.65,84a8,8,0,0,1,2.2-13.3L68,68l57.53,21.17,54.84-32.75a32,32,0,0,1,41,7.32L240,87.64l-147.41,88a32,32,0,0,1-38-4.32L18.53,136a8,8,0,0,1,2.32-13.19L24,121.27,55.79,132Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'AirplaneTakeoffBold'

export const AirplaneTakeoffBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
