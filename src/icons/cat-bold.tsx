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
        x1="128"
        y1="192"
        x2="128"
        y2="224"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <SvgPolyline
        points="144 176 128 192 112 176"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <SvgPath
        d="M67.6,67.6h0a102.87,102.87,0,0,1,120.8,0h0l21.94-25.24A8,8,0,0,1,224,48v88c0,48.6-43,88-96,88s-96-39.4-96-88V48a8,8,0,0,1,13.66-5.66Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <_Circle cx="84" cy="140" r="16" />
      <_Circle cx="172" cy="140" r="16" />
      <Line
        x1="148"
        y1="49.91"
        x2="148"
        y2="88"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <Line
        x1="108"
        y1="49.91"
        x2="108"
        y2="88"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'CatBold'

export const CatBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
