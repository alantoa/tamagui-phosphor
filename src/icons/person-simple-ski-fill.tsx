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
      <Path d="M144,60a28,28,0,1,1,28,28A28,28,0,0,1,144,60ZM37.76,87.68l111,32.36,5.61,5.61A8,8,0,0,0,160,128h40a8,8,0,0,0,0-16H163.31l-4.72-4.72,0,0-24.9-24.9a8,8,0,0,0-11.32,0L112,92.67,42.24,72.32a8,8,0,0,0-4.48,15.36Zm200.9,105.47a8,8,0,0,0-11.1-2.22,53.78,53.78,0,0,1-45,6.9l-62.79-18.28,29.9-29.9a8,8,0,0,0-3.46-13.35l-56-16a8,8,0,0,0-4.4,15.39L128.73,148l-26.5,26.49-76-22.13a8,8,0,1,0-4.48,15.36l156.31,45.52a69.78,69.78,0,0,0,58.37-8.95A8,8,0,0,0,238.66,193.15Z" />
    </Svg>
  )
}

Icon.displayName = 'PersonSimpleSkiFill'

export const PersonSimpleSkiFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
