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
      <SvgPath d="M240,196a16,16,0,0,0-6.65-11.7l-38-27.15,17-16.95a39.67,39.67,0,0,0,11-35.79,99.52,99.52,0,0,0-35.4-57.89A101.93,101.93,0,0,0,122.58,24,100.29,100.29,0,0,0,24,122.58a102.12,102.12,0,0,0,22.55,65.28,99.52,99.52,0,0,0,57.89,35.4,39.68,39.68,0,0,0,35.79-11l16.95-17,27.15,38A16,16,0,0,0,196,240c.44,0,.88.05,1.32.05a16,16,0,0,0,11.31-4.69l26.64-26.64A16,16,0,0,0,240,196Zm-42.6,28-32.63-45.69a8,8,0,0,0-5.85-3.32q-.33,0-.66,0a8,8,0,0,0-5.66,2.34l-23.63,23.63a23.68,23.68,0,0,1-21.36,6.63,80.3,80.3,0,0,1-12.3-3.5l108.8-108.8a80.63,80.63,0,0,1,3.5,12.3,23.67,23.67,0,0,1-6.63,21.36L177.3,152.55a8,8,0,0,0,1,12.17L224,197.36Z" />
    </Svg>
  )
}

Icon.displayName = 'PingPongFill'

export const PingPongFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
