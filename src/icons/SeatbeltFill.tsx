// @ts-nocheck
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

type IconComponent = (propsIn: IconProps) => JSX.Element

export const SeatbeltFill: IconComponent = themed(
  memo(function SeatbeltFill(props: IconProps) {
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
        <SvgPath d="M128,112a44,44,0,1,1,44-44A44.05,44.05,0,0,1,128,112Zm72,104H77.16L197.29,110a8.17,8.17,0,0,0,1.1-1.19,8.07,8.07,0,0,0,1.61-5.08A8,8,0,0,0,186.71,98l-24.54,21.65A80,80,0,0,0,49,179.25a8.33,8.33,0,0,0-.1,1.1L48,223.83A8,8,0,0,0,56,232H200a8,8,0,0,0,0-16Zm-11.88-73a8,8,0,0,0-6.25,1.94L119.47,200H200a8,8,0,0,0,8-8,79.6,79.6,0,0,0-14.27-45.62A8,8,0,0,0,188.12,143Z" />
      </Svg>
    )
  })
)
