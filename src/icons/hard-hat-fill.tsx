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
      <Path d="M152,152H104V40a16,16,0,0,1,16-16h16a16,16,0,0,1,16,16Zm72,16H32a16,16,0,0,0-16,16v8a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16v-8A16,16,0,0,0,224,168Zm0-20V136a96.44,96.44,0,0,0-50.11-84.31A4,4,0,0,0,168,55.22V152h52A4,4,0,0,0,224,148ZM36,152H88V55.22a4,4,0,0,0-5.89-3.53A96.44,96.44,0,0,0,32,136v12A4,4,0,0,0,36,152Z" />
    </Svg>
  )
}

Icon.displayName = 'HardHatFill'

export const HardHatFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
