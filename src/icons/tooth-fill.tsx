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
      <SvgPath d="M168,24H88A56,56,0,0,0,32,79.75c0,42.72,8,75.4,14.7,95.28,8.72,25.8,20.62,45.49,32.64,54A15.67,15.67,0,0,0,88.47,232a16.09,16.09,0,0,0,16-14.9c.85-11.52,5-49.11,23.53-49.11s22.68,37.59,23.53,49.11a16.09,16.09,0,0,0,9.18,13.36,15.69,15.69,0,0,0,15.95-1.41c12-8.53,23.92-28.22,32.64-54C216,155.15,224,122.47,224,79.75A56,56,0,0,0,168,24Zm3,56.57A8,8,0,1,1,165,95.42L128,80.61,91,95.42A8,8,0,1,1,85,80.57L106.46,72,85,63.42A8,8,0,1,1,91,48.57l37,14.81,37-14.81A8,8,0,1,1,171,63.42L149.54,72Z" />
    </Svg>
  )
}

Icon.displayName = 'ToothFill'

export const ToothFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
