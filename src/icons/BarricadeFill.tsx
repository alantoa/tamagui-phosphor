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

export const BarricadeFill: IconComponent = themed(
  memo(function BarricadeFill(props: IconProps) {
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
        <SvgPath d="M224,64H32A16,16,0,0,0,16,80v72a16,16,0,0,0,16,16H56v32a8,8,0,0,0,16,0V168H184v32a8,8,0,0,0,16,0V168h24a16,16,0,0,0,16-16V80A16,16,0,0,0,224,64ZM32,152V92l60,60Zm192,0H167.31l-72-72H164l60,60v12Z" />
      </Svg>
    )
  })
)
