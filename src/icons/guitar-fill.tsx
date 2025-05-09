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
      <SvgPath d="M249.66,46.34l-40-40a8,8,0,0,0-11.32,11.32L200.69,20,140.52,80.16C117.73,68.3,92.21,69.29,76.75,84.74a42.27,42.27,0,0,0-9.39,14.37A8.24,8.24,0,0,1,59.81,104c-14.59.49-27.26,5.72-36.65,15.11C11.08,131.22,6,148.6,8.74,168.07,11.4,186.7,21.07,205.15,36,220s33.34,24.56,52,27.22A71.13,71.13,0,0,0,98.1,248c15.32,0,28.83-5.23,38.76-15.16,9.39-9.39,14.62-22.06,15.11-36.65a8.24,8.24,0,0,1,4.92-7.55,42.22,42.22,0,0,0,14.37-9.39c15.45-15.46,16.44-41,4.58-63.77L236,55.31l2.34,2.35a8,8,0,0,0,11.32-11.32Zm-156,159.31a8,8,0,0,1-11.31,0l-32-32a8,8,0,0,1,11.32-11.31l32,32A8,8,0,0,1,93.66,205.65Zm42.14-45.86a28,28,0,1,1,0-39.59A28,28,0,0,1,135.8,159.79Zm31.06-58a86.94,86.94,0,0,0-6-6.68,85.23,85.23,0,0,0-6.69-6L176,67.31,188.69,80ZM200,68.68,187.32,56,212,31.31,224.69,44Z" />
    </Svg>
  )
}

Icon.displayName = 'GuitarFill'

export const GuitarFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
