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
      width="{size}"
      height="{size}"
      fill="currentColor"
      otherProps="{...otherProps}"
    >
      <Rect width="256" height="256" fill="none" />
      <Path d="M216,88H168V40a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V160a8,8,0,0,0,8,8H88v48a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96A8,8,0,0,0,216,88ZM48,48H152V152H48Z" />
    </Svg>
  )
}

Icon.displayName = 'SubtractSquareFill'

export const SubtractSquareFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
