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
        r="40"
        fill="none"
        stroke={color}
        strokeMiterlimit="10"
        strokeWidth="16"
      />
      <Rect
        x="32"
        y="32"
        width="192"
        height="192"
        rx="48"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="180" cy="76" r="12" />
    </Svg>
  )
}

Icon.displayName = 'InstagramLogo'

export const InstagramLogo: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
