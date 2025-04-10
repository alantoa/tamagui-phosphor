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
        d="M32,120c50.38,0,93.51,31.28,111.3,75.08a8,8,0,0,0,7.42,4.92H236a8,8,0,0,0,8-8v-4.73A23.92,23.92,0,0,0,225.21,164L176,152,64,40C44.59,61.22,32,89,32,120Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        d="M80,130v62a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V120"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'HighHeelBold'

export const HighHeelBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
