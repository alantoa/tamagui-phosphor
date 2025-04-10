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
        d="M59.12,32.64A8,8,0,0,0,48,40v60a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Path
        d="M219.11,163.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v60a8,8,0,0,0,11.12,7.37Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'FlipVerticalBold'

export const FlipVerticalBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
