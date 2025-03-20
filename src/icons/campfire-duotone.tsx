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
        d="M128,32S76,64,76,108a52,52,0,0,0,52,52,24,24,0,0,1-24-24c0-24,24-40,24-40s24,16,24,40a24,24,0,0,1-24,24,52,52,0,0,0,52-52C180,64,128,32,128,32Z"
        opacity="0.2"
      />
      <SvgPath
        d="M180,108a52,52,0,0,1-104,0c0-44,52-76,52-76S180,64,180,108Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="40"
        y1="168"
        x2="216"
        y2="224"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="216"
        y1="168"
        x2="40"
        y2="224"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M152,136a24,24,0,0,1-48,0c0-24,24-40,24-40S152,112,152,136Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'CampfireDuotone'

export const CampfireDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
