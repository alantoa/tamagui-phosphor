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
        d="M51.5,148.5a48,48,0,0,1-10.38-8.08h0a48,48,0,0,0,66.4,64.08L152,178.81V141.86L96,174.19Z"
        opacity="0.2"
      />
      <SvgPath
        d="M204.5,107.5,160,81.81l-32,18.48h0l56,32.33V184a48,48,0,0,1-1.81,13h0A48,48,0,0,0,204.5,107.5Z"
        opacity="0.2"
      />
      <SvgPath
        d="M104,141.86V77.19L148.5,51.5a47.77,47.77,0,0,1,12.19-5v0A48,48,0,0,0,72,72v51.38l32,18.48Z"
        opacity="0.2"
      />
      <SvgPath
        d="M104,141.86V77.19L148.5,51.5a48,48,0,0,1,66.4,64.08"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M128,155.71,72,123.38V72a48,48,0,0,1,88.69-25.47"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M152,141.86,96,174.19,51.5,148.5A48,48,0,0,1,73.79,59"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M152,114.14v64.67L107.5,204.5a48,48,0,0,1-66.4-64.08"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M128,100.29l56,32.33V184a48,48,0,0,1-88.69,25.47"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M104,114.14l56-32.33,44.5,25.69a48,48,0,0,1-22.29,89.55"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'OpenAiLogoDuotone'

export const OpenAiLogoDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
