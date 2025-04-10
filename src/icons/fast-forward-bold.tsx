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
        d="M36,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L48.18,65.26A7.91,7.91,0,0,0,36,71.85Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        d="M140,71.85v112.3a7.91,7.91,0,0,0,12.18,6.59l88.19-56.15a7.8,7.8,0,0,0,0-13.18L152.18,65.26A7.91,7.91,0,0,0,140,71.85Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'FastForwardBold'

export const FastForwardBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
