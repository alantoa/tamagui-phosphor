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
      <Path d="M236,49a25,25,0,0,0-42.63-17.66L143.16,81.54,18.34,206.4a8,8,0,0,0,3.86,13.45A160.67,160.67,0,0,0,58.4,224c32.95,0,65.91-10.2,96.94-30.23,31.76-20.5,50.19-43.82,51-44.8a8,8,0,0,0-.64-10.59L181.31,114l47.38-47.39A24.84,24.84,0,0,0,236,49ZM146.23,180.6c-34.43,22.1-69.94,30.92-105.76,26.3L146,101.34l43.09,43.1A220.09,220.09,0,0,1,146.23,180.6Z" />
    </Svg>
  )
}

Icon.displayName = 'KnifeFill'

export const KnifeFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
