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
      <Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,200H64a8,8,0,0,1-8-8V64a8,8,0,0,1,8-8H80a8,8,0,0,1,0,16H72V184h8a8,8,0,0,1,0,16Zm80-40a8,8,0,0,1-8-8V120a8,8,0,0,0-16,0v32a8,8,0,0,1-16,0V120a8,8,0,0,0-16,0v32a8,8,0,0,1-16,0V104a8,8,0,0,1,13.66-5.65A23.94,23.94,0,0,1,128,102.13,24,24,0,0,1,168,120v32A8,8,0,0,1,160,160Zm40,32a8,8,0,0,1-8,8H176a8,8,0,0,1,0-16h8V72h-8a8,8,0,0,1,0-16h16a8,8,0,0,1,8,8Z" />
    </Svg>
  )
}

Icon.displayName = 'MatrixLogoFill'

export const MatrixLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
