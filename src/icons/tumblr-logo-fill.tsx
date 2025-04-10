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
      <Path d="M152,120v48a8,8,0,0,0,8,8h32a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8H152a64.07,64.07,0,0,1-64-64V120H64a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8,40,40,0,0,0,40-40,8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V64h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8Z" />
    </Svg>
  )
}

Icon.displayName = 'TumblrLogoFill'

export const TumblrLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
