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
        d="M182.43,113.17l4.88,4.89a16,16,0,0,1,0,22.63l-9,9a8,8,0,0,1-11.31,0L106.34,89a8,8,0,0,1,0-11.31l9-9a16,16,0,0,1,22.63,0l4.89,4.88,25-25.1c10.79-10.79,28.37-11.45,39.44-1a28,28,0,0,1,.57,40.15Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        d="M159.31,141.94l-56.68,56.69a32,32,0,0,1-32.06,8h0l-20,8.74a8,8,0,0,1-8.86-1.67h0a5.74,5.74,0,0,1-1.2-6.36l9.19-21.06h0a32,32,0,0,1,7.7-32.87l56.69-56.68"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'Eyedropper'

export const Eyedropper: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
