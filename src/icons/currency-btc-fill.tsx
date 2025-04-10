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
      <Path d="M176,152a16,16,0,0,1-16,16H112V136h48A16,16,0,0,1,176,152Zm64-24A104,104,0,1,1,136,24,104.11,104.11,0,0,1,240,128Zm-48,24a32,32,0,0,0-15.51-27.42A32,32,0,0,0,160,73V64a8,8,0,0,0-16,0v8H128V64a8,8,0,0,0-16,0v8H96a8,8,0,0,0,0,16v80a8,8,0,0,0,0,16h16v8a8,8,0,0,0,16,0v-8h16v8a8,8,0,0,0,16,0v-8A32,32,0,0,0,192,152Zm-24-48a16,16,0,0,0-16-16H112v32h40A16,16,0,0,0,168,104Z" />
    </Svg>
  )
}

Icon.displayName = 'CurrencyBtcFill'

export const CurrencyBtcFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
