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
      <SvgPath d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H88V136H80A64.07,64.07,0,0,1,16,72,24.07,24.07,0,0,1,40.08,48h.4A23.55,23.55,0,0,1,64,71.52V72h0A16,16,0,0,0,80,88h8V56a40,40,0,0,1,80,0v72h8a16,16,0,0,0,16-16h0v-.48A23.55,23.55,0,0,1,215.52,88h.4A24.07,24.07,0,0,1,240,112a64.07,64.07,0,0,1-64,64h-8v32h48A8,8,0,0,1,224,216Z" />
    </Svg>
  )
}

Icon.displayName = 'CactusFill'

export const CactusFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
