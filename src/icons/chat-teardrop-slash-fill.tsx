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
      <Path d="M213.92,210.62a8,8,0,1,1-11.84,10.76l-13.57-14.92A99.4,99.4,0,0,1,132,224H48a16,16,0,0,1-16-16V124A99.54,99.54,0,0,1,55.29,59.92L42.08,45.38a8,8,0,0,1,.72-11.46,8.22,8.22,0,0,1,11.34.95Zm-5.57-29.91a4,4,0,0,0,6.24-.4A100,100,0,0,0,83.78,36.42a4,4,0,0,0-1,6.18Z" />
    </Svg>
  )
}

Icon.displayName = 'ChatTeardropSlashFill'

export const ChatTeardropSlashFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
