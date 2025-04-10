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
      <Path d="M240,160a32,32,0,1,0-39.93,31,8,8,0,0,0-.07,1,32,32,0,0,1-32,32H144a32,32,0,0,1-32-32V151.48c31.47-4,56-31.47,56-64.31V40a8,8,0,0,0-8-8H136a8,8,0,0,0,0,16h16V87.17c0,26.58-21.25,48.49-47.36,48.83A48,48,0,0,1,56,88V48H72a8,8,0,0,0,0-16H48a8,8,0,0,0-8,8V88a64,64,0,0,0,56,63.49V192a48.05,48.05,0,0,0,48,48h24a48.05,48.05,0,0,0,48-48,8,8,0,0,0-.07-1A32,32,0,0,0,240,160Zm-32,8a8,8,0,1,1,8-8A8,8,0,0,1,208,168Z" />
    </Svg>
  )
}

Icon.displayName = 'StethoscopeFill'

export const StethoscopeFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
