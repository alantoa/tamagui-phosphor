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
      <SvgPath d="M126.41,24C70.72,24.85,25.21,70.07,24,125.75a103.48,103.48,0,0,0,13.51,53.5,4,4,0,0,0,7.1-.29A119.29,119.29,0,0,0,56,128,71.93,71.93,0,0,1,73.74,80.67a8.22,8.22,0,0,1,10.8-1.59A8,8,0,0,1,86,91a55.92,55.92,0,0,0-14,37,135.12,135.12,0,0,1-18.44,68.31,4,4,0,0,0,.61,4.85A104.33,104.33,0,0,0,67,212.21,4,4,0,0,0,72.82,211,159.58,159.58,0,0,0,84,189a8,8,0,1,1,14.8,6.1,176.9,176.9,0,0,1-11.85,23.54,4,4,0,0,0,1.89,5.74,103.46,103.46,0,0,0,25,6.7,4,4,0,0,0,4.07-2,206.86,206.86,0,0,0,25.57-85.61,8,8,0,1,1,15.95,1.16,222.83,222.83,0,0,1-21.58,80.75,4,4,0,0,0,4.08,5.74,103.72,103.72,0,0,0,20.6-4.95,4,4,0,0,0,2.35-2.23A247.29,247.29,0,0,0,184,129.76c.22-30.64-23.4-56.67-54-57.73a56.72,56.72,0,0,0-16,1.73,8,8,0,0,1-9.84-6.21,8.23,8.23,0,0,1,6.29-9.39A72.05,72.05,0,0,1,200,128a264.82,264.82,0,0,1-10.66,74.63,4,4,0,0,0,6.47,4.15A104,104,0,0,0,126.41,24ZM128,96a32.05,32.05,0,0,1,23.85,10.67,8,8,0,0,1-1.24,11.79,8.26,8.26,0,0,1-10.88-1.34,16,16,0,0,0-16.78-4.3,16.39,16.39,0,0,0-11,15.67,176.89,176.89,0,0,1-3.19,33A8,8,0,0,1,101,168a7.69,7.69,0,0,1-1.5-.14,8.3,8.3,0,0,1-6.31-9.66A161.12,161.12,0,0,0,96,128,32,32,0,0,1,128,96Z" />
    </Svg>
  )
}

Icon.displayName = 'FingerprintSimpleFill'

export const FingerprintSimpleFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
