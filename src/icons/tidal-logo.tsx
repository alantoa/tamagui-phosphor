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
        x="19.72"
        y="67.72"
        width="56.57"
        height="56.57"
        transform="translate(-53.82 62.06) rotate(-45)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Rect
        x="99.72"
        y="67.72"
        width="56.57"
        height="56.57"
        transform="translate(-30.39 118.63) rotate(-45)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Rect
        x="99.72"
        y="147.72"
        width="56.57"
        height="56.57"
        transform="translate(-86.96 142.06) rotate(-45)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Rect
        x="179.72"
        y="67.72"
        width="56.57"
        height="56.57"
        transform="translate(-6.96 175.2) rotate(-45)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'TidalLogo'

export const TidalLogo: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
