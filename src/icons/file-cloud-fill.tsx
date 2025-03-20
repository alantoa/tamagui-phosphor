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
      <SvgPath d="M160,181a52.06,52.06,0,0,1-52,51H60.72C40.87,232,24,215.77,24,195.92a36,36,0,0,1,19.28-31.79,4,4,0,0,1,5.77,4.33,63.53,63.53,0,0,0-1,11.15A8.22,8.22,0,0,0,55.55,188,8,8,0,0,0,64,180a47.55,47.55,0,0,1,4.37-20h0A48,48,0,0,1,160,181Zm56-93V216a16,16,0,0,1-16,16H176a8,8,0,0,1,0-16h24V96H152a8,8,0,0,1-8-8V40H56v88a8,8,0,0,1-16,0V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-27.31-8L160,51.31V80Z" />
    </Svg>
  )
}

Icon.displayName = 'FileCloudFill'

export const FileCloudFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
