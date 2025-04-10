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
      <Path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM56,128H72a8,8,0,0,1,0,16H56a8,8,0,0,1,0-16Zm96,48H56a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Zm48,0H184a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm0-32H104a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" />
    </Svg>
  )
}

Icon.displayName = 'SubtitlesFill'

export const SubtitlesFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
