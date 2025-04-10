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
      <Path d="M248.91,77.72l-20,6.49,12.34,17a8,8,0,1,1-12.94,9.4L216,93.61l-12.34,17a8,8,0,0,1-12.94-9.4l12.34-17-20-6.49A8,8,0,0,1,188,62.5L208,69V48a8,8,0,0,1,16,0V69l20-6.49a8,8,0,0,1,4.95,15.22ZM176,192a56,56,0,1,1-88-46V40a32,32,0,0,1,64,0V146A56.23,56.23,0,0,1,176,192Zm-95.18-8h78.36A40.16,40.16,0,0,0,140,157.35a8,8,0,0,1-4-6.93V40a16,16,0,0,0-32,0V150.42a8,8,0,0,1-4,6.93A40.16,40.16,0,0,0,80.82,184Z" />
    </Svg>
  )
}

Icon.displayName = 'ThermometerColdFill'

export const ThermometerColdFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
