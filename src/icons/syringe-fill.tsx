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
      <SvgPath d="M237.66,77.6a8,8,0,0,1-11.32,0L208,59.25,179.3,88l34.35,34.35a8,8,0,0,1-11.32,11.32L196,127.27l-84,84A16,16,0,0,1,100.65,216H51.26L29.6,237.66a8,8,0,0,1-11.72-.43,8.21,8.21,0,0,1,.61-11.1l21.45-21.46V155.28A16,16,0,0,1,44.63,144l15.18-15.18a4,4,0,0,1,5.66,0L94.3,157.63a8,8,0,1,0,11.32-11.32L76.78,117.47a4,4,0,0,1,0-5.66l11-11a4,4,0,0,1,5.66,0l28.84,28.84a8,8,0,1,0,11.32-11.32L104.79,89.46a4,4,0,0,1,0-5.66l23.87-23.86-6.35-6.35a8,8,0,0,1,.18-11.49,8.22,8.22,0,0,1,11.37.41L168,76.63l28.69-28.7L178.33,29.58a8,8,0,0,1,.17-11.49,8.23,8.23,0,0,1,11.38.41l47.78,47.78A8,8,0,0,1,237.66,77.6Z" />
    </Svg>
  )
}

Icon.displayName = 'SyringeFill'

export const SyringeFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
