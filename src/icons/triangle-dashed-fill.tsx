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
      <Path d="M236.8,188.09,149.35,36.22a24.76,24.76,0,0,0-42.7,0L19.2,188.09a23.51,23.51,0,0,0,0,23.72A24.34,24.34,0,0,0,40.55,224h174.9a24.34,24.34,0,0,0,21.33-12.19A23.51,23.51,0,0,0,236.8,188.09ZM108,200H60.79A12,12,0,0,1,50.4,182l24.18-42a8,8,0,0,1,13.87,8L67.71,184H108a8,8,0,0,1,0,16Zm-1.12-84A8,8,0,0,1,93,108l24.59-42.7a12,12,0,0,1,20.8,0L163,108a8,8,0,0,1-13.87,8L128,79.31Zm98.72,78a12.05,12.05,0,0,1-10.39,6H148a8,8,0,0,1,0-16h40.29l-20.74-36a8,8,0,0,1,13.87-8l24.18,42A12,12,0,0,1,205.6,194Z" />
    </Svg>
  )
}

Icon.displayName = 'TriangleDashedFill'

export const TriangleDashedFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
