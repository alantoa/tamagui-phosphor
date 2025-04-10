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
      <Polyline
        points="224 208 32 208 32 48"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Circle cx="132" cy="148" r="16" />
      <_Circle cx="108" cy="92" r="16" />
      <_Circle cx="76" cy="164" r="16" />
      <_Circle cx="172" cy="116" r="16" />
      <_Circle cx="196" cy="76" r="16" />
      <_Circle cx="188" cy="164" r="16" />
    </Svg>
  )
}

Icon.displayName = 'ChartScatterBold'

export const ChartScatterBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
