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
      <SvgRect width={size} height={size} fill="none" />
      <SvgPath d="M92,120H64V96H92a12,12,0,0,1,0,24Zm4,16H64v32H96a16,16,0,0,0,0-32Zm80-16a24,24,0,0,0-22.62,16h45.24A24,24,0,0,0,176,120Zm64-64V200a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V56A16,16,0,0,1,32,40H224A16,16,0,0,1,240,56ZM144,88a8,8,0,0,0,8,8h48a8,8,0,0,0,0-16H152A8,8,0,0,0,144,88Zm-16,64a32,32,0,0,0-14.13-26.53A28,28,0,0,0,92,80H56a8,8,0,0,0-8,8v88a8,8,0,0,0,8,8H96A32,32,0,0,0,128,152Zm88-8a40,40,0,1,0-13.54,30,8,8,0,0,0-10.59-12,24,24,0,0,1-38.49-10H208A8,8,0,0,0,216,144Z" />
    </Svg>
  )
}

Icon.displayName = 'BehanceLogoFill'

export const BehanceLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
