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
      <SvgPath d="M240,112a56.06,56.06,0,0,0-56-56c-1.77,0-3.54.1-5.29.26a56,56,0,0,0-101.42,0C75.54,56.1,73.77,56,72,56A56,56,0,0,0,48,162.59V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V162.59A56.09,56.09,0,0,0,240,112Zm-87.76,30.06,8-32a8,8,0,0,1,15.52,3.88l-8,32A8,8,0,0,1,160,152a8.13,8.13,0,0,1-1.95-.24A8,8,0,0,1,152.24,142.06ZM120,112a8,8,0,0,1,16,0v32a8,8,0,0,1-16,0Zm-33.94-7.76a8,8,0,0,1,9.7,5.82l8,32a8,8,0,0,1-5.82,9.7,8.13,8.13,0,0,1-2,.24,8,8,0,0,1-7.75-6.06l-8-32A8,8,0,0,1,86.06,104.24ZM192,208H64V167.42a55.49,55.49,0,0,0,8,.58H184a55.49,55.49,0,0,0,8-.58Z" />
    </Svg>
  )
}

Icon.displayName = 'ChefHatFill'

export const ChefHatFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
