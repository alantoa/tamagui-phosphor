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
      <SvgPath d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-10,99.66c-13.19,15-25.34,20.29-36.37,20.29-14.94,0-27.81-9.61-38.43-17.54-19.2-14.34-31.89-23.81-53.2.48a8,8,0,1,1-12-10.55c31.05-35.41,56.34-16.53,74.8-2.75,19.2,14.34,31.89,23.81,53.2-.48a8,8,0,1,1,12,10.55Z" />
    </Svg>
  )
}

Icon.displayName = 'TildeFill'

export const TildeFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
