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
      <Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm-24,88H96v40a8,8,0,0,1-16,0V112H72a8,8,0,0,1,0-16h32a8,8,0,0,1,0,16Zm88,40a8,8,0,0,1-16,0V125.29l-14,16a8,8,0,0,1-12,0l-14-16V152a8,8,0,0,1-16,0V104a8,8,0,0,1,14-5.27l22,25.12,22-25.12A8,8,0,0,1,192,104Z" />
    </Svg>
  )
}

Icon.displayName = 'TrademarkFill'

export const TrademarkFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
