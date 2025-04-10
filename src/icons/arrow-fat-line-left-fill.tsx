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
      <Path d="M114.34,229.66l-96-96a8,8,0,0,1,0-11.32l96-96A8,8,0,0,1,128,32V72h56a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H128v40a8,8,0,0,1-13.66,5.66ZM216,184a8,8,0,0,0,8-8V80a8,8,0,0,0-16,0v96A8,8,0,0,0,216,184Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowFatLineLeftFill'

export const ArrowFatLineLeftFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
