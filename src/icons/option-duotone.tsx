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
        d="M32,80H224a0,0,0,0,1,0,0V192a0,0,0,0,1,0,0H48a16,16,0,0,1-16-16V80A0,0,0,0,1,32,80Z"
        opacity="0.2"
      />
      <SvgPath
        d="M32,80H95.06a8,8,0,0,1,7.15,4.42l51.58,103.16a8,8,0,0,0,7.15,4.42H224"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="152"
        y1="80"
        x2="224"
        y2="80"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'OptionDuotone'

export const OptionDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
