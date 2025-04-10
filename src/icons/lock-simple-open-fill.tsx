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
      <Path d="M224,96V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V96A16,16,0,0,1,48,80H80V56A48.05,48.05,0,0,1,128,8c23.2,0,43.32,16.15,47.84,38.41a8,8,0,0,1-15.68,3.18C157.2,35,143.37,24,128,24A32,32,0,0,0,96,56V80H208A16,16,0,0,1,224,96Z" />
    </Svg>
  )
}

Icon.displayName = 'LockSimpleOpenFill'

export const LockSimpleOpenFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
