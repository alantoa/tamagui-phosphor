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
        cx="128"
        cy="128"
        r="72"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="16"
      />
      <Path
        d="M88,68.13l6.81-37.56A8,8,0,0,1,102.68,24h50.64a8,8,0,0,1,7.87,6.57L168,68.13"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        d="M88,187.87l6.81,37.56a8,8,0,0,0,7.87,6.57h50.64a8,8,0,0,0,7.87-6.57L168,187.87"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Polyline
        points="128 88 128 128 168 128"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'Watch'

export const Watch: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
