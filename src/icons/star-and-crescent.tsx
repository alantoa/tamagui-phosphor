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

export const StarAndCrescent: IconComponent = themed(
  memo(function StarAndCrescent(props: IconProps) {
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
          d="M152,206.4a88,88,0,0,1,0-156.8,88,88,0,1,0,0,156.8Z"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <SvgPolygon
          points="177.46 128 160 98.33 192.59 106.4 214.39 80 217.06 114.65 248 128 217.06 141.35 214.39 176 192.59 149.6 160 157.67 177.46 128"
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
