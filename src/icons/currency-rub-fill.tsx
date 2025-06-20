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

export const CurrencyRubFill: IconComponent = themed(
  memo(function CurrencyRubFill(props: IconProps) {
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
        <SvgPath d="M168,104a24,24,0,0,1-24,24H112V80h32A24,24,0,0,1,168,104Zm64,24A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-48-24a40,40,0,0,0-40-40H104a8,8,0,0,0-8,8v56H88a8,8,0,0,0,0,16h8v16H88a8,8,0,0,0,0,16h8v16a8,8,0,0,0,16,0V176h40a8,8,0,0,0,0-16H112V144h32A40,40,0,0,0,184,104Z" />
      </Svg>
    )
  })
)
