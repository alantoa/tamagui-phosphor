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
      <Path d="M176,48H80a80,80,0,0,0,0,160h96a80,80,0,0,0,0-160ZM123.49,98.81l-24,64a8,8,0,0,1-15,0l-24-64a8,8,0,1,1,15-5.62l16.51,44,16.51-44a8,8,0,1,1,15,5.62ZM191,156a8,8,0,0,1-13.9,7.94l-11.44-20c-.53,0-1.07.05-1.61.05H152v16a8,8,0,0,1-16,0V96a8,8,0,0,1,8-8h20a28,28,0,0,1,16.84,50.35ZM176,116a12,12,0,0,1-12,12H152V104h12A12,12,0,0,1,176,116Z" />
    </Svg>
  )
}

Icon.displayName = 'VirtualRealityFill'

export const VirtualRealityFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
