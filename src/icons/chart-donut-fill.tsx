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
      <SvgPath d="M120,161.94v65.34a4,4,0,0,1-4.46,4,104.28,104.28,0,0,1-84-64.5,4,4,0,0,1,2.69-5.34L97.32,144.5a4,4,0,0,1,4.35,1.66,32.25,32.25,0,0,0,15.59,12A4,4,0,0,1,120,161.94ZM128.06,24A8,8,0,0,0,120,32V88a7.94,7.94,0,0,0,7.87,8,32,32,0,0,1,10.86,62.15,4,4,0,0,0-2.73,3.79v65.34a4,4,0,0,0,4.45,4A104,104,0,0,0,128.06,24Zm-32,101.49a32,32,0,0,1,4.15-13.42l0-.07a8,8,0,0,0-.57-8.87A8.36,8.36,0,0,0,97.18,101L48.85,73.06A8,8,0,0,0,37.92,76,104.12,104.12,0,0,0,25,142.68,4,4,0,0,0,30,146L93.22,129A3.94,3.94,0,0,0,96.1,125.49Z" />
    </Svg>
  )
}

Icon.displayName = 'ChartDonutFill'

export const ChartDonutFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
