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
        d="M32,208H88l96-104h40a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H168L72,152H32a8,8,0,0,0-8,8v40A8,8,0,0,0,32,208Z"
        opacity="0.2"
      />
      <SvgPath
        d="M32,208H88l96-104h40a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H168L72,152H32a8,8,0,0,0-8,8v40A8,8,0,0,0,32,208Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPolyline
        points="176 176 200 152 224 176"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="200"
        y1="152"
        x2="200"
        y2="208"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'EscalatorUpDuotone'

export const EscalatorUpDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
