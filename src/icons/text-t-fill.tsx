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
      <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,96a8,8,0,0,1-16,0V88H136v88h12a8,8,0,0,1,0,16H108a8,8,0,0,1,0-16h12V88H88v8a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" />
    </Svg>
  )
}

Icon.displayName = 'TextTFill'

export const TextTFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
