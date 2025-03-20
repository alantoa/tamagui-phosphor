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
        d="M112.8,173.45c-11.81,9.79-27.19,19.26-43.89,18.48A64,64,0,0,1,72,64H183.05c35.17,0,64.49,28,64.94,63.15A64,64,0,0,1,184,192c-15.48,0-29.68-9.35-40.75-18.5A23.91,23.91,0,0,0,112.8,173.45Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
      <Line
        x1="80"
        y1="96"
        x2="176"
        y2="96"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="8"
      />
    </Svg>
  )
}

Icon.displayName = 'VisorThin'

export const VisorThin: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
