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
    <Svg viewBox="0 0 256 256" width={size} height={size} {...otherProps}>
      <SvgRect width={size} height={size} fill="none" />
      <_Circle
        cx="212"
        cy="84"
        r="20"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Line
        x1="108"
        y1="188"
        x2="108"
        y2="92"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <SvgPath
        d="M68,154.78V56a40,40,0,0,1,80,0v98.77h0a52,52,0,1,1-80,0Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Circle cx="108" cy="188" r="24" />
    </Svg>
  )
}

Icon.displayName = 'ThermometerBold'

export const ThermometerBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
