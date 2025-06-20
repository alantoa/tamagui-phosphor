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

export const FactoryFill: IconComponent = themed(
  memo(function FactoryFill(props: IconProps) {
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
        <SvgPath d="M232,208h-8V136c0-.05,0-.09,0-.14s0-.29,0-.43,0-.28,0-.41a.76.76,0,0,0,0-.15l-15-105.13A16.08,16.08,0,0,0,193.06,16H174.94A16.08,16.08,0,0,0,159.1,29.74l-11.56,80.91L108.8,81.6A8,8,0,0,0,96,88v32L44.8,81.6A8,8,0,0,0,32,88V208H24a8,8,0,0,0,0,16H232a8,8,0,0,0,0-16ZM108,184H80a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm68,0H148a8,8,0,0,1,0-16h28a8,8,0,0,1,0,16Zm-5.33-56-8.53-6.4L174.94,32h18.12l13.72,96Z" />
      </Svg>
    )
  })
)
