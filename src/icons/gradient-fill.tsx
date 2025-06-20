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

export const GradientFill: IconComponent = themed(
  memo(function GradientFill(props: IconProps) {
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
        <SvgPath d="M80,192a8,8,0,0,1-8,8H32a8,8,0,0,1,0-16H72A8,8,0,0,1,80,192Zm144-8H184a8,8,0,0,0,0,16h40a8,8,0,0,0,0-16Zm-72,0H104a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16ZM32,168h80a8,8,0,0,0,0-16H32a8,8,0,0,0,0,16Zm192-16H144a8,8,0,0,0,0,16h80a8,8,0,0,0,0-16Zm0-96H32a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V64A8,8,0,0,0,224,56Zm0,56H32a8,8,0,0,0-8,8v8a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8v-8A8,8,0,0,0,224,112Z" />
      </Svg>
    )
  })
)
