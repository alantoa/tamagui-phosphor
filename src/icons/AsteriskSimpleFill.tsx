// @ts-nocheck
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

type IconComponent = (propsIn: IconProps) => JSX.Element

export const AsteriskSimpleFill: IconComponent = themed(
  memo(function AsteriskSimpleFill(props: IconProps) {
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
        <SvgPath d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm63.34,91.83-50.4,16.38,31.15,42.87a8,8,0,1,1-12.94,9.4L128,141.61,96.85,184.48a8,8,0,0,1-12.94-9.4l31.15-42.87-50.4-16.38a8,8,0,0,1,4.94-15.22L120,117V64a8,8,0,0,1,16,0v53l50.4-16.38a8,8,0,0,1,4.94,15.22Z" />
      </Svg>
    )
  })
)
