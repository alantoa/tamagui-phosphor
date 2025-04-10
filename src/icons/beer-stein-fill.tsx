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
      <Path d="M216,88H200V72a40,40,0,0,0-40-40H148.82c-11.91-10.2-28-16-44.82-16C68.71,16,40,41.12,40,72V208a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16v-8h16a24,24,0,0,0,24-24V112A24,24,0,0,0,216,88ZM104,184a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0ZM57,64c4.46-18.24,23.85-32,47-32,13.87,0,27.06,5,36.21,13.78A8,8,0,0,0,145.74,48H160a24,24,0,0,1,22.62,16ZM224,176a8,8,0,0,1-8,8H200V104h16a8,8,0,0,1,8,8Z" />
    </Svg>
  )
}

Icon.displayName = 'BeerSteinFill'

export const BeerSteinFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
