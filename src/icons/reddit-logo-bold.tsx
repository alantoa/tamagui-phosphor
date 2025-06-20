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

export const RedditLogoBold: IconComponent = themed(
  memo(function RedditLogoBold(props: IconProps) {
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
        <_Circle
          cx="184"
          cy="32"
          r="12"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <SvgPath
          d="M59.41,89.88C77.72,78.75,101.72,72,128,72s50.28,6.75,68.59,17.88h0a24,24,0,1,1,31.62,34.79h0A51.6,51.6,0,0,1,232,144c0,39.76-46.56,72-104,72S24,183.76,24,144a51.6,51.6,0,0,1,3.79-19.33h0A24,24,0,1,1,59.41,89.88Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <_Circle cx="88" cy="128" r="20" />
        <_Circle cx="168" cy="128" r="20" />
        <SvgPath
          d="M156,172a100,100,0,0,1-56,0"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <SvgPolyline
          points="128 72 136 24 172.16 30.03"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
      </Svg>
    )
  })
)
