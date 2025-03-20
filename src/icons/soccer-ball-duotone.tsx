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

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 256 256" {...otherProps}>
      <SvgRect width="256" height="256" fill="none" />
      <SvgPath
        d="M32.15,133.42c-.1-1.8-.15-3.6-.15-5.42A95.61,95.61,0,0,1,53.23,67.78l11.94,40.31Z"
        opacity="0.2"
      />
      <SvgPath d="M103.87,220.94a96.12,96.12,0,0,1-56.95-41.52H89.17Z" opacity="0.2" />
      <SvgPath d="M152.13,220.94a96.12,96.12,0,0,0,57-41.52H166.83Z" opacity="0.2" />
      <SvgPath
        d="M223.85,133.42c.1-1.8.15-3.6.15-5.42a95.61,95.61,0,0,0-21.23-60.22l-11.94,40.31Z"
        opacity="0.2"
      />
      <SvgPath d="M91.75,39.08a96.34,96.34,0,0,1,72.5,0L128,64Z" opacity="0.2" />
      <SvgPolygon
        points="128 88 88 115.5 103.28 160 152.72 160 168 115.5 128 88"
        opacity="0.2"
      />
      <_Circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPolygon
        points="128 88 88 115.5 103.28 160 152.72 160 168 115.5 128 88"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
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
        strokeWidth="16"
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
        strokeWidth="16"
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
        strokeWidth="16"
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
        strokeWidth="16"
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
        strokeWidth="16"
      />
      <SvgPolyline
        points="164.25 39.08 128 64 91.75 39.08"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPolyline
        points="223.85 133.42 190.82 108.08 202.77 67.78"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPolyline
        points="53.23 67.78 65.17 108.08 32.15 133.42"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPolyline
        points="152.13 220.94 166.83 179.42 209.08 179.42"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPolyline
        points="46.92 179.42 89.17 179.42 103.87 220.94"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'SoccerBallDuotone'

export const SoccerBallDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
