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
      <SvgPath d="M236.28,161.84a16,16,0,0,1-18.38,5.06l-49-17.39-.29-.11a16,16,0,0,1-9.72-11.59l-6.21-29.75h0a76.52,76.52,0,0,0-49.68.11l-5.9,29.52a16,16,0,0,1-9.75,11.73l-.29.11-49,17.37A15.8,15.8,0,0,1,32.35,168a16,16,0,0,1-12.63-6.14c-17.23-22.22-15.3-51.71,4.69-71.71,56.15-56.17,151-56.17,207.18,0h0C251.58,110.13,253.51,139.62,236.28,161.84ZM216,192H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z" />
    </Svg>
  )
}

Icon.displayName = 'PhoneDisconnectFill'

export const PhoneDisconnectFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
