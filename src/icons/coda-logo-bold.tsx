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
      <Path
        d="M176,176a48,48,0,1,1,25.85-88.64A4,4,0,0,0,208,84V48a8,8,0,0,0-8-8H56a8,8,0,0,0-8,8V208a8,8,0,0,0,8,8H200a8,8,0,0,0,8-8V172a4,4,0,0,0-6.12-3.38C193.9,173.74,186.27,176.41,176,176Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'CodaLogoBold'

export const CodaLogoBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
