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
      <SvgPath d="M136.83,220.43a8,8,0,0,1-11.09,2.23A183.15,183.15,0,0,0,24,192a8,8,0,0,1,0-16,199.11,199.11,0,0,1,110.6,33.34A8,8,0,0,1,136.83,220.43ZM24,144a8,8,0,0,0,0,16,214.81,214.81,0,0,1,151.17,61.71,8,8,0,1,0,11.2-11.42A230.69,230.69,0,0,0,24,144Zm208,16a216.51,216.51,0,0,0-48.59,5.49q8.24,6.25,16,13.16A201.53,201.53,0,0,1,232,176a8,8,0,0,1,0,16c-6,0-11.93.29-17.85.86q8.32,8.67,15.94,18.14a8,8,0,1,1-12.48,10A247,247,0,0,0,24,128a8,8,0,0,1,0-16,265.43,265.43,0,0,1,48,4.38V80a8,8,0,0,1,3.2-6.4l64-48a8,8,0,0,1,9.6,0l64,48A8,8,0,0,1,216,80v32.5c5.31-.32,10.64-.5,16-.5a8,8,0,0,1,0,16,246.3,246.3,0,0,0-84.26,14.69q9.44,5,18.46,10.78A232.2,232.2,0,0,1,232,144a8,8,0,0,1,0,16ZM128.07,133.27A261.51,261.51,0,0,1,168,119.81V96H120v34C122.71,131,125.4,132.13,128.07,133.27Z" />
    </Svg>
  )
}

Icon.displayName = 'FarmFill'

export const FarmFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
