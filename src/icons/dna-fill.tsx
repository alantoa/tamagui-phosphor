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
      <Path d="M200,204.5V232a8,8,0,0,1-16,0V204.5a63.67,63.67,0,0,0-35.38-57.25l-48.4-24.19A79.58,79.58,0,0,1,56,51.5V24a8,8,0,0,1,16,0V51.5a63.67,63.67,0,0,0,35.38,57.25l48.4,24.19A79.58,79.58,0,0,1,200,204.5ZM163.18,192H83.91a8,8,0,0,1-8-8.53A8.18,8.18,0,0,1,84.18,176H149.7a4,4,0,0,0,2.75-6.9,48.24,48.24,0,0,0-11-7.53L94.8,138.23a4,4,0,0,0-4.08.3A79.51,79.51,0,0,0,56,204.5v27.23A8.17,8.17,0,0,0,63.47,240,8,8,0,0,0,72,232V216h92a4,4,0,0,0,4-4v-7.5a48.76,48.76,0,0,0-.9-9.32A4,4,0,0,0,163.18,192ZM191.47,16A8.17,8.17,0,0,0,184,24.27V40H92a4,4,0,0,0-4,4v7.5a48.76,48.76,0,0,0,.9,9.32A4,4,0,0,0,92.82,64h79a8.18,8.18,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H106.3a4,4,0,0,0-2.75,6.9,48.24,48.24,0,0,0,11,7.53l46.67,23.34a4,4,0,0,0,4.08-.3A79.51,79.51,0,0,0,200,51.5V24A8,8,0,0,0,191.47,16Z" />
    </Svg>
  )
}

Icon.displayName = 'DnaFill'

export const DnaFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
