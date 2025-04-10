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
      <Path
        d="M16,64a8,8,0,0,1,10.05-7.74C43.35,60.89,81.44,72,128,72S212.65,60.89,230,56.27A8,8,0,0,1,240,64V192a8,8,0,0,1-10.06,7.73C212.63,195.08,174.55,184,128,184S43.37,195.08,26.06,199.72A8,8,0,0,1,16,192Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="204" cy="108" r="12" />
      <Path
        d="M16,160.69l54.34-54.35a8,8,0,0,1,11.32,0l79.46,79.46"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        d="M131.31,156,157,130.34a8,8,0,0,1,11.31,0l68.25,68.25"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'Panorama'

export const Panorama: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
