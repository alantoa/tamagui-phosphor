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

export const GitlabLogoSimpleFill: IconComponent = themed(
  memo(function GitlabLogoSimpleFill(props: IconProps) {
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
        <SvgPath d="M208.14,178.06l-73.27,51.76a11.91,11.91,0,0,1-13.74,0L47.86,178.06a57.19,57.19,0,0,1-22-61L45.75,41a11.94,11.94,0,0,1,22.79-1.11L86.22,88h83.56l17.68-48.13A11.94,11.94,0,0,1,210.25,41l19.9,76.12A57.19,57.19,0,0,1,208.14,178.06Z" />
      </Svg>
    )
  })
)
