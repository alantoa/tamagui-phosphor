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
        strokeWidth="24"
      />
      <Line
        x1="92"
        y1="76"
        x2="164"
        y2="76"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Circle cx="104" cy="128" r="16" />
      <_Circle cx="152" cy="128" r="16" />
      <_Circle cx="104" cy="176" r="16" />
      <_Circle cx="152" cy="176" r="16" />
    </Svg>
  )
}

Icon.displayName = 'CalculatorBold'

export const CalculatorBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
