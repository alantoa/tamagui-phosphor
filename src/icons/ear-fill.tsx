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
      <SvgPath d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm20,128a4.21,4.21,0,0,0,1.33-.22,8,8,0,0,1,5.34,15.08A20,20,0,0,1,128,148c0-8.85,4.77-15.23,9-20.87,3.77-5,7-9.38,7-15.13a16,16,0,0,0-32,0,8,8,0,0,1-16,0,32,32,0,0,1,64,0c0,11.07-5.66,18.63-10.2,24.71-3.6,4.81-5.8,7.93-5.8,11.29A4,4,0,0,0,148,152Zm36-32a8,8,0,0,1-8-8,48,48,0,0,0-96,0c0,11.9,6.71,20.5,13.82,29.6,7,8.92,14.18,18.15,14.18,30.4a20,20,0,0,0,34,14.29,8,8,0,1,1,11.19,11.42A36,36,0,0,1,92,172c0-6.74-5-13.14-10.79-20.55C73.54,141.63,64,129.41,64,112a64,64,0,0,1,128,0A8,8,0,0,1,184,120Z" />
    </Svg>
  )
}

Icon.displayName = 'EarFill'

export const EarFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
