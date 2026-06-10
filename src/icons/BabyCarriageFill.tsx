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

export const BabyCarriageFill: IconComponent = themed(
  memo(function BabyCarriageFill(props: IconProps) {
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
        <SvgPath d="M215.58,54.55a7.53,7.53,0,0,0-1.32-1.27A79.68,79.68,0,0,0,160,32h-8a16,16,0,0,0-16,16v56H55.2A40.07,40.07,0,0,0,16,72a8,8,0,0,0,0,16,24,24,0,0,1,24,24,80.09,80.09,0,0,0,80,80h40A79.94,79.94,0,0,0,215.58,54.55Zm-6.91,16A63.73,63.73,0,0,1,223.48,104H166.81ZM160,48a63.59,63.59,0,0,1,36.69,11.61L152,95.35V48ZM104,224a16,16,0,1,1-16-16A16,16,0,0,1,104,224Zm104,0a16,16,0,1,1-16-16A16,16,0,0,1,208,224Z" />
      </Svg>
    )
  })
)
