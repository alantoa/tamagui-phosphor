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
        d="M240,164v36a8,8,0,0,1-8,8H205.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H169.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H121.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H85.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H40a8,8,0,0,1-8-8V164c9.22-32.06,12-84.65,0-116H144a8,8,0,0,1,8,8v60h40A48,48,0,0,1,240,164Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Line
        x1="116"
        y1="116"
        x2="152"
        y2="116"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Line
        x1="32"
        y1="164"
        x2="240"
        y2="164"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'BootBold'

export const BootBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
