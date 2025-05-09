import React, { memo } from 'react'
import PropTypes from 'prop-types'
import type { NamedExoticComponent } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import {
  Svg,
  Circle as _Circle,
  Ellipse as SvgEllipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path as SvgPath,
  Polygon as SvgPolygon,
  Polyline as SvgPolyline,
  Rect as SvgRect,
  Symbol as SvgSymbol,
  Text as _Text,
  Use,
  Defs,
  Stop as SvgStop,
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
      <SvgRect width="256" height="256" fill="none" />
      <SvgPath d="M256,208a24,24,0,0,1-48,0c0-17.91,15.57-41.77,17.34-44.44a8,8,0,0,1,13.32,0C240.43,166.23,256,190.09,256,208ZM132.49,124.49a12,12,0,0,0-17-17l0,0s0,0,0,0a12,12,0,0,0,17,16.94ZM37.65,18.34A8,8,0,0,0,26.34,29.66l32.6,32.6L70.25,51ZM234.53,139.07a8,8,0,0,0,3.13-13.24L122.17,10.34a8,8,0,0,0-11.31,0L70.25,51l40.43,40.42a28,28,0,1,1-11.31,11.32L58.94,62.26,15,106.17a24,24,0,0,0,0,33.94L99.89,225a24,24,0,0,0,33.94,0l78.49-78.49Z" />
    </Svg>
  )
}

Icon.displayName = 'PaintBucketFill'

export const PaintBucketFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
