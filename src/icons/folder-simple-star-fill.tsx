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

export const FolderSimpleStarFill: IconComponent = themed(
  memo(function FolderSimpleStarFill(props: IconProps) {
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
        <SvgPath d="M128,208a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V64A16,16,0,0,1,40,48H93.33a16.12,16.12,0,0,1,9.6,3.2L130.67,72H216a16,16,0,0,1,16,16v32a8,8,0,0,1-16,0V88H128a8,8,0,0,1-4.8-1.6L93.33,64H40V200h80A8,8,0,0,1,128,208Zm111.63-48.8a8,8,0,0,0-7-5.56l-29.84-2.31-11.43-26.5a8,8,0,0,0-14.7,0l-11.43,26.5-29.84,2.31a8,8,0,0,0-4.47,14.14l22.51,18.59-6.85,27.71a8,8,0,0,0,11.82,8.81L184,207.82l25.61,15.07a8,8,0,0,0,11.82-8.81l-6.85-27.71,22.51-18.59A8,8,0,0,0,239.63,159.2Z" />
      </Svg>
    )
  })
)
