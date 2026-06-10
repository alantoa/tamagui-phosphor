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

export const WifiHighFill: IconComponent = themed(
  memo(function WifiHighFill(props: IconProps) {
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
        <SvgPath d="M244.35,92.8l-104,125.43A15.93,15.93,0,0,1,128,224h0a15.93,15.93,0,0,1-12.31-5.77L11.65,92.8A15.65,15.65,0,0,1,8.11,80.91,15.93,15.93,0,0,1,14.28,70.1,186.67,186.67,0,0,1,128,32,186.67,186.67,0,0,1,241.72,70.1a15.93,15.93,0,0,1,6.17,10.81A15.65,15.65,0,0,1,244.35,92.8Z" />
      </Svg>
    )
  })
)
