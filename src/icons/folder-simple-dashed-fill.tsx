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
      <Path d="M24,80V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L132.8,73.6A8,8,0,0,1,128,88H32A8,8,0,0,1,24,80ZM88,200H40v-8a8,8,0,0,0-16,0v8.62A15.4,15.4,0,0,0,39.38,216H88a8,8,0,0,0,0-16Zm72,0H128a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm64-56a8,8,0,0,0-8,8v48H200a8,8,0,0,0,0,16h16.89A15.13,15.13,0,0,0,232,200.89V152A8,8,0,0,0,224,144Zm-8-72H168a8,8,0,0,0,0,16h48v24a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM32,160a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v32A8,8,0,0,0,32,160Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderSimpleDashedFill'

export const FolderSimpleDashedFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
