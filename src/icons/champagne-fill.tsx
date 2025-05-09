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
      <SvgPath d="M149.91,13.53A8,8,0,0,0,142.3,8H97.71a8,8,0,0,0-7.61,5.53,451,451,0,0,0-14.21,59.7c-7.26,44.25-4.35,75.76,8.65,93.66A40,40,0,0,0,112,183.42V232H96a8,8,0,1,0,0,16h48a8,8,0,0,0,0-16H128V183.42a39.94,39.94,0,0,0,27.46-16.53c13-17.9,15.92-49.41,8.66-93.66A451,451,0,0,0,149.91,13.53ZM93.8,64c3-15.58,6.73-29.81,9.79-40h32.83c3.06,10.19,6.77,24.42,9.8,40ZM232,52a12,12,0,1,1-12-12A12,12,0,0,1,232,52ZM184,20a12,12,0,1,1,12,12A12,12,0,0,1,184,20Zm24,80a12,12,0,1,1-12-12A12,12,0,0,1,208,100Z" />
    </Svg>
  )
}

Icon.displayName = 'ChampagneFill'

export const ChampagneFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
