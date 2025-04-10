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
      <Path d="M201,40H179.35L165.66,26.34A8,8,0,0,0,160,24H96a8,8,0,0,0-5.66,2.34L76.65,40H55A15,15,0,0,0,40,55V209a15,15,0,0,0,15,15h61a4,4,0,0,0,4-4V104.27A8.18,8.18,0,0,1,127.47,96a8,8,0,0,1,8.53,8V220a4,4,0,0,0,4,4h61a15,15,0,0,0,15-15V55A15,15,0,0,0,201,40ZM86.54,107.08A4,4,0,0,1,80,104V59.31L95.24,44.07l23.47,35.21ZM128,80h0v0Zm48,24a4,4,0,0,1-2.3,3.63,3.93,3.93,0,0,1-4.21-.51l-32.2-27.82,23.47-35.21L176,59.31Z" />
    </Svg>
  )
}

Icon.displayName = 'ShirtFoldedFill'

export const ShirtFoldedFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
