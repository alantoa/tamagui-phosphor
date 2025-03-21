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
      <SvgPath d="M120,64.37V16a8,8,0,0,0-16,0V64.37a88,88,0,1,0,16,0ZM183.54,144H151.77c-1.51-28.36-10.79-48.36-19.44-61.06A72.16,72.16,0,0,1,183.54,144Zm-47.78,16c-2,33.52-16.13,52.95-23.76,61.08-7.64-8.15-21.77-27.57-23.76-61.08ZM91.67,82.94C83,95.64,73.74,115.64,72.23,144H40.46A72.16,72.16,0,0,1,91.67,82.94ZM40.46,160H72.23c1.51,28.36,10.79,48.36,19.44,61.06A72.16,72.16,0,0,1,40.46,160ZM256,88a8,8,0,0,1-8,8h-8v8a8,8,0,0,1-16,0V96h-8a8,8,0,0,1,0-16h8V72a8,8,0,0,1,16,0v8h8A8,8,0,0,1,256,88ZM152,40a8,8,0,0,1,8-8h16V16a8,8,0,0,1,16,0V32h16a8,8,0,0,1,0,16H192V64a8,8,0,0,1-16,0V48H160A8,8,0,0,1,152,40Z" />
    </Svg>
  )
}

Icon.displayName = 'DiscoBallFill'

export const DiscoBallFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
