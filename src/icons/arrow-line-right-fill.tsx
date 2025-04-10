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
      <Path d="M189.66,122.34a8,8,0,0,1,0,11.32l-72,72A8,8,0,0,1,104,200V136H32a8,8,0,0,1,0-16h72V56a8,8,0,0,1,13.66-5.66ZM216,32a8,8,0,0,0-8,8V216a8,8,0,0,0,16,0V40A8,8,0,0,0,216,32Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowLineRightFill'

export const ArrowLineRightFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
