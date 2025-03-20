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
        d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z"
        opacity="0.2"
      />
      <SvgPath
        d="M80,104h96a32,32,0,0,1,32,32v80a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V136A32,32,0,0,1,80,104Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M80,104V88a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v16"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M184,40a16,16,0,0,0-16-16H104"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="128"
        y1="24"
        x2="128"
        y2="64"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'HandSoapDuotone'

export const HandSoapDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
