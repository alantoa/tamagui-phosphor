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
      <Path
        d="M224,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59l-88.19-56.15a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,224,71.85Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        d="M120,71.85v112.3a7.91,7.91,0,0,1-12.18,6.59L19.63,134.59a7.8,7.8,0,0,1,0-13.18l88.19-56.15A7.91,7.91,0,0,1,120,71.85Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'Rewind'

export const Rewind: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
