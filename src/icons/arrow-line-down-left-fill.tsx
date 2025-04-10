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
      <Path d="M232,48a8,8,0,0,1-8,8H48a8,8,0,0,1,0-16H224A8,8,0,0,1,232,48ZM178.34,90.34,120,148.69,77.66,106.34A8,8,0,0,0,64,112v96a8,8,0,0,0,8,8h96a8,8,0,0,0,5.66-13.66L131.31,160l58.35-58.34a8,8,0,0,0-11.32-11.32Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLineDownLeftFill'

export const ArrowLineDownLeftFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
