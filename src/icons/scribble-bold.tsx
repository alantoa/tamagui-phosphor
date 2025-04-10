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
        d="M88,40,46.63,81.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L78.63,177.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L200,184a22.62,22.62,0,0,0,0,32h0"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'ScribbleBold'

export const ScribbleBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
