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
      <SvgPath d="M176,32c-20.61,0-38.28,18.16-48,45.85C118.28,50.16,100.61,32,80,32c-31.4,0-56,42.17-56,96s24.6,96,56,96c20.61,0,38.28-18.16,48-45.85,9.72,27.69,27.39,45.85,48,45.85,31.4,0,56-42.17,56-96S207.4,32,176,32ZM106.92,186.39C99.43,200.12,89.62,208,80,208s-19.43-7.88-26.92-21.61a104.81,104.81,0,0,1-10.24-29.23,32,32,0,1,0,0-58.32A104.81,104.81,0,0,1,53.08,69.61C60.57,55.88,70.38,48,80,48s19.43,7.88,26.92,21.61C115.35,85.07,120,105.81,120,128S115.35,170.93,106.92,186.39Zm96,0C195.43,200.12,185.62,208,176,208s-19.43-7.88-26.92-21.61a104.81,104.81,0,0,1-10.24-29.23,32,32,0,1,0,0-58.32,104.81,104.81,0,0,1,10.24-29.23C156.57,55.88,166.38,48,176,48s19.43,7.88,26.92,21.61C211.35,85.07,216,105.81,216,128S211.35,170.93,202.92,186.39Z" />
    </Svg>
  )
}

Icon.displayName = 'EyesFill'

export const EyesFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
