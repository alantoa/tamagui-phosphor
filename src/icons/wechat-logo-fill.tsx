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
      <Path d="M232.07,186.76A80,80,0,0,0,169.58,72.59,80,80,0,1,0,23.93,138.76l-7.27,24.71a16,16,0,0,0,19.87,19.87l24.71-7.27a79,79,0,0,0,25.19,7.35,80,80,0,0,0,108.33,40.65l24.71,7.27a16,16,0,0,0,19.87-19.87ZM132,152a12,12,0,1,1,12-12A12,12,0,0,1,132,152Zm-52,0a80.32,80.32,0,0,0,1.3,14.3,63.45,63.45,0,0,1-15.49-5.85,8,8,0,0,0-6-.63L32,168l8.17-27.76a8,8,0,0,0-.63-6A64,64,0,0,1,151.68,72.43,80.12,80.12,0,0,0,80,152Zm108,0a12,12,0,1,1,12-12A12,12,0,0,1,188,152Z" />
    </Svg>
  )
}

Icon.displayName = 'WechatLogoFill'

export const WechatLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
