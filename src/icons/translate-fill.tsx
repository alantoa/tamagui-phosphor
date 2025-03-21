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
      <SvgPath d="M160,129.89,175.06,160H144.94l6.36-12.7v0ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM207.16,188.42l-40-80a8,8,0,0,0-14.32,0L139.66,134.8a62.31,62.31,0,0,1-23.61-10A79.61,79.61,0,0,0,135.6,80H152a8,8,0,0,0,0-16H112V56a8,8,0,0,0-16,0v8H56a8,8,0,0,0,0,16h63.48a63.73,63.73,0,0,1-15.3,34.05,65.93,65.93,0,0,1-9-13.61,8,8,0,0,0-14.32,7.12,81.75,81.75,0,0,0,11.4,17.15A63.62,63.62,0,0,1,56,136a8,8,0,0,0,0,16,79.56,79.56,0,0,0,48.11-16.13,78.33,78.33,0,0,0,28.18,13.66l-19.45,38.89a8,8,0,0,0,14.32,7.16L136.94,176h46.12l9.78,19.58a8,8,0,1,0,14.32-7.16Z" />
    </Svg>
  )
}

Icon.displayName = 'TranslateFill'

export const TranslateFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
