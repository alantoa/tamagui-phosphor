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
        x="80"
        y="64"
        width="96"
        height="48"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Rect
        x="32"
        y="48"
        width="192"
        height="160"
        rx="8"
        transform="translate(256) rotate(90)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="88" cy="148" r="12" />
      <_Circle cx="128" cy="148" r="12" />
      <_Circle cx="168" cy="148" r="12" />
      <_Circle cx="88" cy="188" r="12" />
      <_Circle cx="128" cy="188" r="12" />
      <_Circle cx="168" cy="188" r="12" />
    </Svg>
  )
}

Icon.displayName = 'Calculator'

export const Calculator: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
