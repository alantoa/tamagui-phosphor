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
      <Path d="M240,120H223.66a95.52,95.52,0,0,0-22.39-53.95l12.39-12.39a8,8,0,0,0-11.32-11.32L190,54.73A95.52,95.52,0,0,0,136,32.34V16a8,8,0,0,0-16,0V32.34A95.52,95.52,0,0,0,66.05,54.73L53.66,42.34A8,8,0,0,0,42.34,53.66L54.73,66.05a95.52,95.52,0,0,0-22.39,54H16a8,8,0,0,0,0,16H32.34A95.52,95.52,0,0,0,54.73,190L42.34,202.34a8,8,0,0,0,11.32,11.32l12.39-12.39a95.52,95.52,0,0,0,54,22.39V240a8,8,0,0,0,16,0V223.66A95.52,95.52,0,0,0,190,201.27l12.39,12.39a8,8,0,0,0,11.32-11.32L201.27,190A95.52,95.52,0,0,0,223.66,136H240a8,8,0,0,0,0-16ZM80,108a28,28,0,1,1,28,28A28,28,0,0,1,80,108Zm48,84a16,16,0,1,1,16-16A16,16,0,0,1,128,192Zm48-48a16,16,0,1,1,16-16A16,16,0,0,1,176,144Z" />
    </Svg>
  )
}

Icon.displayName = 'VirusFill'

export const VirusFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
