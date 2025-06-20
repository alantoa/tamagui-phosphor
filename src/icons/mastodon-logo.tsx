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

export const MastodonLogo: IconComponent = themed(
  memo(function MastodonLogo(props: IconProps) {
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
        <SvgPath
          d="M160,224H72a32,32,0,0,1-32-32V72A32,32,0,0,1,72,40H184a32,32,0,0,1,32,32v72a32,32,0,0,1-32,32H40"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <SvgPath
          d="M128,136V104a24,24,0,0,0-48,0v32"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
        <SvgPath
          d="M176,136V104a24,24,0,0,0-48,0"
          fill="none"
          stroke={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        />
      </Svg>
    )
  })
)
