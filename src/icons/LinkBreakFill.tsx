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

export const LinkBreakFill: IconComponent = themed(
  memo(function LinkBreakFill(props: IconProps) {
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
        <SvgPath d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM96,64a8,8,0,0,1,16,0V80a8,8,0,0,1-16,0ZM64,96H80a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16Zm64.08,85.66-7.21,7.21a38,38,0,1,1-53.74-53.74l7.21-7.21a8,8,0,1,1,11.32,11.31l-7.22,7.21a22,22,0,0,0,31.12,31.12l7.21-7.22a8,8,0,1,1,11.31,11.32ZM160,192a8,8,0,0,1-16,0V176a8,8,0,0,1,16,0Zm32-32H176a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm-3.13-39.13-7.21,7.21a8,8,0,1,1-11.32-11.31l7.22-7.21a22,22,0,0,0-31.12-31.12l-7.21,7.22a8,8,0,1,1-11.31-11.32l7.21-7.21a38,38,0,1,1,53.74,53.74Z" />
      </Svg>
    )
  })
)
