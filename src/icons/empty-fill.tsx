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
      <SvgPath d="M170.49,91.59A56,56,0,0,1,97.54,175ZM128,72a56,56,0,0,0-42.49,92.41l73-83.37A55.67,55.67,0,0,0,128,72Zm104,56A104,104,0,1,1,128,24,104.13,104.13,0,0,1,232,128Zm-32,0a71.68,71.68,0,0,0-18.89-48.55L186,73.27a8,8,0,1,0-12-10.54l-4.91,6.18A72,72,0,0,0,74.89,176.55L70,182.73a8,8,0,0,0,12,10.54l4.91-6.18A71.95,71.95,0,0,0,200,128Z" />
    </Svg>
  )
}

Icon.displayName = 'EmptyFill'

export const EmptyFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
