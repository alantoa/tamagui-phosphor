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
        d="M105.05,99.52l0,0L33.55,197a8,8,0,0,0,.79,10.38l14.3,14.3a8,8,0,0,0,10.38.79L156.5,151l0,0A64,64,0,0,1,105.05,99.52Z"
        opacity="0.2"
      />
      <_Circle
        cx="168"
        cy="88"
        r="64"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="213.25"
        y1="133.25"
        x2="122.75"
        y2="42.75"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="96"
        y1="160"
        x2="104"
        y2="152"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M105,99.5,33.55,197a8,8,0,0,0,.79,10.38l14.3,14.3a8,8,0,0,0,10.38.79L156.5,151"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'MicrophoneStageDuotone'

export const MicrophoneStageDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
