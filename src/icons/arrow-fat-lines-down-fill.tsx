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
      <Path d="M229.66,141.66l-96,96a8,8,0,0,1-11.32,0l-96-96A8,8,0,0,1,32,128H72V104a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8v24h40a8,8,0,0,1,5.66,13.66ZM184,40a8,8,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8,8,0,0,0,184,40Zm0,32a8,8,0,0,0-8-8H80a8,8,0,0,0,0,16h96A8,8,0,0,0,184,72Z" />
    </Svg>
  )
}

Icon.displayName = 'ArrowFatLinesDownFill'

export const ArrowFatLinesDownFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
