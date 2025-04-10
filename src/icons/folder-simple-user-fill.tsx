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
      <Path d="M231.73,221.94A8,8,0,0,1,224,232H160A8,8,0,0,1,152.27,222a40,40,0,0,1,17.11-23.33,32,32,0,1,1,45.24,0A40,40,0,0,1,231.73,221.94ZM216,72H130.67L102.93,51.2a16.12,16.12,0,0,0-9.6-3.2H40A16,16,0,0,0,24,64V200a16,16,0,0,0,16,16h80a8,8,0,0,0,0-16H40V64H93.33l27.74,20.8a16.12,16.12,0,0,0,9.6,3.2H216v32a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72Z" />
    </Svg>
  )
}

Icon.displayName = 'FolderSimpleUserFill'

export const FolderSimpleUserFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
