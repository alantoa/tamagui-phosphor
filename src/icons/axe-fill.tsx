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
      <SvgPath d="M255.15,97.72A16,16,0,0,0,242,86.94a136.46,136.46,0,0,1-51.65-18l10.31-10.3a25,25,0,0,0-35.32-35.32l-13.2,13.21c-2.33-2.8-3.81-4.84-4.41-5.69a16,16,0,0,0-24.41-2.15L84.68,67.36a16,16,0,0,0,2.14,24.4c.86.6,2.9,2.08,5.7,4.41L7.31,181.37a25,25,0,0,0,35.32,35.32l82.3-82.31a136.63,136.63,0,0,1,18,51.65,16,16,0,0,0,10.77,13.12,16.21,16.21,0,0,0,5.15.85,15.88,15.88,0,0,0,11.26-4.69l81.18-81.19A15.86,15.86,0,0,0,255.15,97.72ZM241,94.87ZM176.69,34.63a9,9,0,1,1,12.68,12.68L176.82,59.86A152.5,152.5,0,0,1,163.1,48.21ZM31.31,205.37a9,9,0,1,1-12.68-12.68l85.58-85.58a149.75,149.75,0,0,1,11.65,13.72Z" />
    </Svg>
  )
}

Icon.displayName = 'AxeFill'

export const AxeFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
