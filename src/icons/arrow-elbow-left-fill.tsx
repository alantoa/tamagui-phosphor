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
      <Path d="M237.66,101.66l-96,96a8,8,0,0,1-11.32,0L60,127.31,29.66,157.66A8,8,0,0,1,16,152V80a8,8,0,0,1,8-8H96a8,8,0,0,1,5.66,13.66L71.31,116,136,180.69l90.34-90.35a8,8,0,0,1,11.32,11.32Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowElbowLeftFill'

export const ArrowElbowLeftFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
