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
      <Path d="M160,16H96A16,16,0,0,0,80,32V224a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V32A16,16,0,0,0,160,16ZM128,208a12,12,0,1,1,12-12A12,12,0,0,1,128,208Zm0-68a12,12,0,1,1,12-12A12,12,0,0,1,128,140Zm0-68a12,12,0,1,1,12-12A12,12,0,0,1,128,72Z" />
    </Svg>
  )
}

Icon.displayName = 'DotsThreeVerticalFill'

export const DotsThreeVerticalFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
