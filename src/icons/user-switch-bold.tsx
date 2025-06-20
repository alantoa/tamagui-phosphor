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

export const UserSwitchBold: IconComponent = themed(
  memo(function UserSwitchBold(props: IconProps) {
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
          cx="128"
          cy="120"
          r="36"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <SvgPolyline
          points="204 128 224 148 244 128"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <SvgPolyline
          points="12 128 32 108 52 128"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <SvgPath
          d="M32,108v20a96,96,0,0,0,174,56"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <SvgPath
          d="M224,148V128A96,96,0,0,0,50,72"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <SvgPath
          d="M66.62,201.82a64,64,0,0,1,122.76,0"
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
