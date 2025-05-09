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
      <SvgPath d="M148.73,120H107.27L128,75.09ZM216,32V224a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V32a8,8,0,0,1,8-8H208A8,8,0,0,1,216,32ZM76.65,167.26a8,8,0,0,0,10.61-3.91L99.89,136h56.22l12.63,27.35a8,8,0,0,0,14.52-6.7l-48-104a8,8,0,0,0-14.52,0l-48,104A8,8,0,0,0,76.65,167.26ZM200,192a8,8,0,0,0-8-8H64a8,8,0,0,0,0,16H192A8,8,0,0,0,200,192Z" />
    </Svg>
  )
}

Icon.displayName = 'TextAUnderlineFill'

export const TextAUnderlineFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
