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
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="currentColor"
      {...otherProps}
    >
      <SvgRect width="256" height="256" fill="none" />
      <Line
        x1="40"
        y1="216"
        x2="216"
        y2="216"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M96,216V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76h0A20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20h0a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20h0a60,60,0,0,1-60,60H160v40"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'Cactus'

export const Cactus: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
