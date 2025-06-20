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

export const PipeWrench: IconComponent = themed(
  memo(function PipeWrench(props: IconProps) {
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
        <SvgPath
          d="M125.66,145.66a8,8,0,0,0,0-11.32L77,85a17,17,0,0,1,0-24h0a17,17,0,0,1,24,0l72.69,73.37a8,8,0,0,1,0,11.32L85,235a17,17,0,0,1-24,0h0a17,17,0,0,1,0-24Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <SvgPath
          d="M132.28,92.58,150.9,74.34a8,8,0,0,1,11.25-.06l37.45,35.38a8,8,0,0,0,11.31,0l3.72-3.72a32,32,0,0,0,0-45.25l-45-42.35a8,8,0,0,0-11.32,0L108.12,68.19"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <SvgPath
          d="M84,92.12,58.34,117.66a8,8,0,0,0,0,11.31L71,141.66a8,8,0,0,0,11.31,0L108,116.4"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </Svg>
    )
  })
)
