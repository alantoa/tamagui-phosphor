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
      <SvgPath d="M184,128c0,22.09-7.16,40-16,40s-16-17.91-16-40,7.16-40,16-40S184,105.91,184,128Zm56,96a8,8,0,0,1-8,8H92c-33.64,0-60-45.68-60-104S58.36,24,92,24h72c33.64,0,60,45.68,60,104,0,37.47-10.88,69.73-27.59,88H232A8,8,0,0,1,240,224ZM57.87,111.81a7.93,7.93,0,0,0,4.64-1.49L80,97.83l13.28,9.49a8,8,0,0,0,9.3-13L84.65,81.49a8,8,0,0,0-9.3,0L53.21,97.3a8,8,0,0,0,4.66,14.51Zm46.67,47.89L84.65,145.49a8,8,0,0,0-9.3,0L56,159.29a8,8,0,1,0,9.3,13L80,161.83l15.24,10.88a8,8,0,1,0,9.3-13Zm89.2,32.37c9.19-17,14.26-39.74,14.26-64.07s-5.07-47.09-14.26-64.07C185.38,48.5,174.82,40,164,40s-21.38,8.5-29.74,23.93C125.07,80.91,120,103.67,120,128s5.07,47.09,14.26,64.07C142.62,207.5,153.18,216,164,216S185.38,207.5,193.74,192.07Z" />
    </Svg>
  )
}

Icon.displayName = 'TireFill'

export const TireFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
