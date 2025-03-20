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
        d="M104.15,53.57C76,74.82,55.89,115.64,64.08,191.89c76.26,8.2,117.09-11.87,138.35-40A104,104,0,0,1,104.15,53.57Z"
        opacity="0.2"
      />
      <_Circle cx="156" cy="76" r="12" />
      <SvgPath
        d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M202.45,151.85a104,104,0,0,1-98.3-98.3"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'FishSimpleDuotone'

export const FishSimpleDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
