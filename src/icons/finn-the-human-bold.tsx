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
      <Rect
        x="56"
        y="108"
        width="144"
        height="80"
        rx="40"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Circle cx="96" cy="148" r="16" />
      <_Circle cx="160" cy="148" r="16" />
      <Path
        d="M20,72a24,24,0,0,1,48,0H188a24,24,0,0,1,48,0v76a76,76,0,0,1-76,76H96a76,76,0,0,1-76-76Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'FinnTheHumanBold'

export const FinnTheHumanBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
