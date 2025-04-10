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
      <Path d="M232,216a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H181.25A72,72,0,0,0,144,80.46V136a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V32A16,16,0,0,1,80,16h48a16,16,0,0,1,16,16V64.37A88.05,88.05,0,0,1,203.94,208H224A8,8,0,0,1,232,216Zm-96-32a8,8,0,0,0,0-16H72a8,8,0,0,0,0,16Z" />
    </Svg>
  )
}

Icon.displayName = 'MicroscopeFill'

export const MicroscopeFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
