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
      <SvgPath d="M189.66,77.66,160,107.31v41.38l29.66,29.65a8,8,0,0,1-11.32,11.32L148.69,160H107.31L77.66,189.66a8,8,0,0,1-11.32-11.32L96,148.69V107.31L66.34,77.66A8,8,0,0,1,77.66,66.34L107.31,96h41.38l29.65-29.66a8,8,0,0,1,11.32,11.32Zm-46.28-6.12a8,8,0,0,0,10.21-4.87,28,28,0,1,1,35.74,35.74A8,8,0,0,0,192,118a7.86,7.86,0,0,0,2.67-.46,44,44,0,1,0-56.16-56.16A8,8,0,0,0,143.38,71.54Zm51.29,67a8,8,0,0,0-5.34,15.08,28,28,0,1,1-35.74,35.74,8,8,0,0,0-15.08,5.34,44,44,0,1,0,56.16-56.16Zm-82,46a8,8,0,0,0-10.21,4.87,28,28,0,1,1-35.74-35.74,8,8,0,0,0-5.34-15.08,44,44,0,1,0,56.16,56.16A8,8,0,0,0,112.62,184.46Zm-51.29-67A7.86,7.86,0,0,0,64,118a8,8,0,0,0,2.67-15.54,28,28,0,1,1,35.74-35.74,8,8,0,1,0,15.08-5.34,44,44,0,1,0-56.16,56.16Z" />
    </Svg>
  )
}

Icon.displayName = 'DroneFill'

export const DroneFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
