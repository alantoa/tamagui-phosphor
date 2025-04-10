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
      <Path d="M60,88H196a4,4,0,0,0,4-4V40a16,16,0,0,0-16-16H72A16,16,0,0,0,56,40V84A4,4,0,0,0,60,88ZM88,48h16a8,8,0,0,1,0,16H88a8,8,0,0,1,0-16Zm136,64a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8,96.09,96.09,0,0,0,51.68,85.14l-3.52,24.6A16,16,0,0,0,96,240h64a16,16,0,0,0,15.84-18.26l-3.52-24.6A96.09,96.09,0,0,0,224,112ZM96,224l2.93-20.5a96.15,96.15,0,0,0,58.14,0L160,224Z" />
    </Svg>
  )
}

Icon.displayName = 'ToiletFill'

export const ToiletFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
