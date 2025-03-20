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
    <Svg viewBox="0 0 256 256" {...otherProps}>
      <SvgRect width="256" height="256" fill="none" />
      <SvgPath d="M229.11,70.82A16,16,0,0,0,216,64H136V32h16a8,8,0,0,0,0-16H104a8,8,0,0,0,0,16h16V64H40A16,16,0,0,0,25,85.47l26.19,72a16,16,0,0,0,15,10.53H189.82a16,16,0,0,0,15-10.53l26.19-72A16,16,0,0,0,229.11,70.82ZM102.52,151.87a7.87,7.87,0,0,1-1.44.13,8,8,0,0,1-7.86-6.57L83,89.43a8,8,0,0,1,15.75-2.86l10.18,56A8,8,0,0,1,102.52,151.87ZM173,89.43l-10.19,56a8,8,0,0,1-7.86,6.57,7.87,7.87,0,0,1-1.44-.13,8,8,0,0,1-6.44-9.3l10.18-56A8,8,0,0,1,173,89.43ZM160,188v44a8,8,0,0,1-8,8H104a8,8,0,0,1-8-8V188a4,4,0,0,1,4-4h56A4,4,0,0,1,160,188Z" />
    </Svg>
  )
}

Icon.displayName = 'AirTrafficControlFill'

export const AirTrafficControlFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
