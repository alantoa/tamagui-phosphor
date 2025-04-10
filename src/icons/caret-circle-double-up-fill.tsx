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
      <Path d="M201.58,201.57a104,104,0,1,0-147.15,0A104.17,104.17,0,0,0,201.58,201.57Zm-99.93-83.92a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,1,1-11.32,11.32L128,91.29Zm0,56a8,8,0,1,1-11.32-11.32l32-32a8,8,0,0,1,11.32,0l32,32a8,8,0,0,1-11.32,11.32L128,147.32Z" />
    </Svg>
  )
}

Icon.displayName = 'CaretCircleDoubleUpFill'

export const CaretCircleDoubleUpFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
