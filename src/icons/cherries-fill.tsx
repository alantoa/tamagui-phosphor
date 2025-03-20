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
    <Svg viewBox="0 0 256 256" width={size} height={size} {...otherProps}>
      <SvgRect width={size} height={size} fill="none" />
      <SvgPath d="M178.42,72a75.24,75.24,0,0,0-10.21.37,91.9,91.9,0,0,0-21.59-25.09C108.78,16.79,57.05,23.77,54.87,24.08A8,8,0,0,0,48,31.43a8.19,8.19,0,0,0,3.69,7.32c17.4,11.68,25.37,30.91,28.7,49.65a72.08,72.08,0,1,0,16.26.14C93.54,68.59,86.56,52,76,39.37c16.67.72,41.24,4.78,60.64,20.48a74.76,74.76,0,0,1,15,16.39c-1.9.69-3.79,1.44-5.65,2.29a8.42,8.42,0,0,0-4.49,4.63,8,8,0,0,0,2.41,9,88.9,88.9,0,0,1,13.59,14,3.64,3.64,0,0,0,.65.65C160,108.15,165.83,112,176,112c12.15,0,18.18-5.51,18.43-5.75l-.09.09a8,8,0,1,1,11.32,11.32C204.6,118.72,194.77,128,176,128l-1.61,0a3,3,0,0,0-3,4,87.91,87.91,0,0,1-7,71.6,8.39,8.39,0,0,0-1,6.24,8,8,0,0,0,7.16,6c1.78.13,3.59.2,5.37.2a72,72,0,0,0,2.42-144Zm-72,50.21-.09.09a8,8,0,0,1,11.32,11.32C116.6,134.72,106.77,144,88,144s-28.6-9.28-29.66-10.34a8,8,0,0,1,11.32-11.32l-.09-.09c.25.24,6.28,5.75,18.43,5.75S106.18,122.49,106.43,122.25Z" />
    </Svg>
  )
}

Icon.displayName = 'CherriesFill'

export const CherriesFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
