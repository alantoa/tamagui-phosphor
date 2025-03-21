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
      <SvgPath d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,64V56a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0Zm106.55,60.7-24.46,20.19L161.55,175a4,4,0,0,1-1.49,4.17,4.05,4.05,0,0,1-2.39.79,4,4,0,0,1-2-.55L128,163.18l-27.64,16.27A4,4,0,0,1,94.45,175l7.46-30.15L77.45,124.7a4,4,0,0,1,2.24-7.08l32.24-2.49,12.4-28.71a4,4,0,0,1,7.34,0l12.4,28.71,32.24,2.49a4,4,0,0,1,2.24,7.08ZM184,64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z" />
    </Svg>
  )
}

Icon.displayName = 'CalendarStarFill'

export const CalendarStarFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
