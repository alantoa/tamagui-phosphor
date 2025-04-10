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
      <Path d="M240,56V96a16,16,0,0,1-16,16H187.5L93.88,213.43A8,8,0,0,1,88,216H32a16,16,0,0,1-16-16V160a16,16,0,0,1,16-16H68.5L162.12,42.57A8,8,0,0,1,168,40h56A16,16,0,0,1,240,56Zm-34.34,90.34a8,8,0,0,0-11.32,0l-24,24a8,8,0,0,0,11.32,11.32L192,171.31V208a8,8,0,0,0,16,0V171.31l10.34,10.35a8,8,0,0,0,11.32-11.32Z" />
    </Svg>
  )
}

Icon.displayName = 'EscalatorUpFill'

export const EscalatorUpFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
