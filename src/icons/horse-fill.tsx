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
      <SvgPath d="M202.05,55A103.24,103.24,0,0,0,128,24h-8a8,8,0,0,0-8,8V59.53L11.81,121.19a8,8,0,0,0-2.59,11.05l13.78,22,.3.43a31.84,31.84,0,0,0,31.34,12.83c13.93-2.36,38.62-6.54,61.4,3.29l-26.6,36.57A84.71,84.71,0,0,1,69.34,194,8,8,0,1,0,58.67,206a103.32,103.32,0,0,0,69.26,26l2.17,0a104,104,0,0,0,72-177ZM124,112a12,12,0,1,1,12-12A12,12,0,0,1,124,112Z" />
    </Svg>
  )
}

Icon.displayName = 'HorseFill'

export const HorseFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
