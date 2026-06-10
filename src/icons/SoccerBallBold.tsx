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

export const SoccerBallBold: IconComponent = themed(
  memo(function SoccerBallBold(props: IconProps) {
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
          cy="128"
          r="96"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <SvgPolygon
          points="128 88 88 115.5 103.28 160 152.72 160 168 115.5 128 88"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <Line
          x1="128"
          y1="64"
          x2="128"
          y2="88"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <Line
          x1="65.17"
          y1="108.09"
          x2="88"
          y2="115.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <Line
          x1="89.17"
          y1="179.42"
          x2="103.28"
          y2="160"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <Line
          x1="166.83"
          y1="179.42"
          x2="152.72"
          y2="160"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <Line
          x1="190.83"
          y1="108.09"
          x2="168"
          y2="115.5"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        />
        <SvgPath d="M209,62.77a8,8,0,0,0-13.9,2.75l-11.94,40.29a8,8,0,0,0,2.8,8.62l33,25.33a8,8,0,0,0,12.85-5.9c.11-2,.17-4,.17-5.86A104.27,104.27,0,0,0,209,62.77Z" />
        <SvgPath d="M72.84,105.81,60.9,65.52A8,8,0,0,0,47,62.77,104.27,104.27,0,0,0,24,128c0,1.89.06,3.86.17,5.86A8,8,0,0,0,37,139.76l33-25.33A8,8,0,0,0,72.84,105.81Z" />
        <SvgPath d="M172.19,38.23a8,8,0,0,0-4.93-6.55,104.19,104.19,0,0,0-78.52,0,8,8,0,0,0-1.51,14l36.24,24.91a8,8,0,0,0,9.06,0l36.24-24.91A8,8,0,0,0,172.19,38.23Z" />
        <SvgPath d="M216.09,175.56a8,8,0,0,0-7-4.14H166.83a8,8,0,0,0-7.54,5.33l-14.7,41.52a8,8,0,0,0,7.54,10.67,7.7,7.7,0,0,0,2-.26,103.66,103.66,0,0,0,61.69-45A8,8,0,0,0,216.09,175.56Z" />
        <SvgPath d="M111.41,218.27l-14.7-41.52a8,8,0,0,0-7.54-5.33H46.92a8,8,0,0,0-6.75,12.29,103.66,103.66,0,0,0,61.69,45,7.7,7.7,0,0,0,2,.26,8,8,0,0,0,7.54-10.67Z" />
      </Svg>
    )
  })
)
