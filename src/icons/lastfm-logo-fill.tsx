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
      <Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM184,184H172.61a40.09,40.09,0,0,1-36.42-23.45l-23-50.48A24,24,0,0,0,91.39,96H80a24,24,0,0,0-24,24v24a24,24,0,0,0,24,24h8a23.92,23.92,0,0,0,18.74-9,8,8,0,1,1,12.48,10A39.83,39.83,0,0,1,88,184H80a40,40,0,0,1-40-40V120A40,40,0,0,1,80,80H91.39a40.09,40.09,0,0,1,36.42,23.45l22.95,50.48A24,24,0,0,0,172.61,168H184a16,16,0,0,0,0-32h-8a28,28,0,0,1,0-56h12a20,20,0,0,1,20,20,8,8,0,0,1-16,0,4,4,0,0,0-4-4H176a12,12,0,0,0,0,24h8a32,32,0,0,1,0,64Z" />
    </Svg>
  )
}

Icon.displayName = 'LastfmLogoFill'

export const LastfmLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
