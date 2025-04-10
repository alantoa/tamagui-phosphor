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
      <SvgPath d="M245.83,121.63a15.53,15.53,0,0,0-9.52-7.33,73.55,73.55,0,0,0-22.17-2.22c4-19.85,1-35.55-2-44.86a16.17,16.17,0,0,0-18.8-10.88,85.53,85.53,0,0,0-28.55,12.12,94.58,94.58,0,0,0-27.11-33.25,16.05,16.05,0,0,0-19.26,0A94.58,94.58,0,0,0,91.26,68.46,85.53,85.53,0,0,0,62.71,56.34,16.14,16.14,0,0,0,43.92,67.22c-3,9.31-6,25-2.06,44.86a73.55,73.55,0,0,0-22.17,2.22,15.53,15.53,0,0,0-9.52,7.33,16,16,0,0,0-1.6,12.26c3.39,12.58,13.8,36.49,45.33,55.33S113.13,208,128.05,208s42.67,0,74-18.78c31.53-18.84,41.94-42.75,45.33-55.33A16,16,0,0,0,245.83,121.63ZM62.1,175.49C35.47,159.57,26.82,140.05,24,129.7a59.61,59.61,0,0,1,22.5-1.17,129.08,129.08,0,0,0,9.15,19.41,142.28,142.28,0,0,0,34,39.56A114.92,114.92,0,0,1,62.1,175.49ZM128,190.4c-9.33-6.94-32-28.23-32-71.23C96,76.7,118.38,55.24,128,48c9.62,7.26,32,28.72,32,71.19C160,162.17,137.33,183.46,128,190.4Zm104-60.68c-2.77,10.24-11.4,29.81-38.09,45.77a114.92,114.92,0,0,1-27.55,12,142.28,142.28,0,0,0,34-39.56,129.08,129.08,0,0,0,9.15-19.41A59.69,59.69,0,0,1,232,129.71Z" />
    </Svg>
  )
}

Icon.displayName = 'FlowerLotusFill'

export const FlowerLotusFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
