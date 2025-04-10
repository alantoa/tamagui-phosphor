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
      <Path d="M200,40a8,8,0,0,0,0,16,16,16,0,0,1,16,16v56H40V72A16,16,0,0,1,56,56a8,8,0,0,0,0-16A32,32,0,0,0,24,72v92a44,44,0,0,0,88,0V144h32v20a44,44,0,0,0,88,0V72A32,32,0,0,0,200,40ZM91.22,179.22a8,8,0,0,1-11.31,0L58.34,157.66a8,8,0,0,1,11.32-11.32l21.56,21.57A8,8,0,0,1,91.22,179.22Zm120,0a8,8,0,0,1-11.31,0l-21.57-21.56a8,8,0,0,1,11.32-11.32l21.56,21.57A8,8,0,0,1,211.22,179.22Z" />
    </Svg>
  )
}

Icon.displayName = 'SunglassesFill'

export const SunglassesFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
