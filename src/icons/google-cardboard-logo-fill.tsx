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

export const GoogleCardboardLogoFill: IconComponent = themed(
  memo(function GoogleCardboardLogoFill(props: IconProps) {
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
        <SvgPath d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a8,8,0,0,0,5.66-2.34L128,179.31l26.34,26.35A8,8,0,0,0,160,208h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-24,80a24,24,0,1,1-24-24A24,24,0,0,1,200,128ZM56,128a24,24,0,1,1,24,24A24,24,0,0,1,56,128Z" />
      </Svg>
    )
  })
)
