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
      <SvgPath d="M213.66,194.34a8,8,0,0,1-11.32,11.32L184,187.31l-18.34,18.35a8,8,0,0,1-11.32-11.32L172.69,176l-18.35-18.34a8,8,0,0,1,11.32-11.32L184,164.69l18.34-18.35a8,8,0,0,1,11.32,11.32L195.31,176ZM157.41,120.1a32,32,0,0,1,23.92,8.05,4,4,0,0,0,5.34,0,31.88,31.88,0,0,1,17.77-8,4,4,0,0,0,3.56-4V40.46a16.41,16.41,0,0,0-9.18-14.93,16,16,0,0,0-18.14,3.16l-160,160a16,16,0,0,0-3.17,18.13A16.4,16.4,0,0,0,32.46,216h93.6a4,4,0,0,0,3.78-5.3,32,32,0,0,1,6.31-32,4,4,0,0,0,0-5.34,32,32,0,0,1,21.26-53.23Z" />
    </Svg>
  )
}

Icon.displayName = 'CellSignalXFill'

export const CellSignalXFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
