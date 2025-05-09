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
      <SvgPath d="M191.5,118.63l-40-32A12,12,0,0,0,132,96v64a12,12,0,0,0,19.5,9.37l40-32a12,12,0,0,0,0-18.74Z" />
      <SvgPath d="M135.5,118.63l-40-32A12,12,0,0,0,76,96v64a12,12,0,0,0,19.5,9.37l40-32a12,12,0,0,0,0-18.74Z" />
      <_Circle
        cx="128"
        cy="128"
        r="96"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'FastForwardCircleBold'

export const FastForwardCircleBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
