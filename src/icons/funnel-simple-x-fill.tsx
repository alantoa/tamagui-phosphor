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
      <Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,128a8,8,0,0,1,8-8h96a8,8,0,0,1,0,16H80A8,8,0,0,1,72,128Zm56,48H112a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm69.66,10.34a8,8,0,0,1-11.32,11.32L176,187.31l-10.34,10.35a8,8,0,0,1-11.32-11.32L164.69,176l-10.35-10.34a8,8,0,0,1,11.32-11.32L176,164.69l10.34-10.35a8,8,0,0,1,11.32,11.32L187.31,176ZM208,96H48a8,8,0,0,1,0-16H208a8,8,0,0,1,0,16Z" />
    </Svg>
  )
}

Icon.displayName = 'FunnelSimpleXFill'

export const FunnelSimpleXFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
