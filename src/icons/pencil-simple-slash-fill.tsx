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

export const PencilSimpleSlashFill: IconComponent = themed(
  memo(function PencilSimpleSlashFill(props: IconProps) {
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
        <SvgPath d="M227.32,73.37,182.63,28.69a16,16,0,0,0-22.63,0L115.64,73.05a4,4,0,0,0-.14,5.52l58.73,64.6a4,4,0,0,0,5.79.13L227.32,96A16,16,0,0,0,227.32,73.37ZM192,108.69,147.32,64l24-24L216,84.69Zm21.92,101.93a8,8,0,1,1-11.84,10.76L154.4,168.92,104,219.31A15.86,15.86,0,0,1,92.69,224H48a16,16,0,0,1-16-16V163.31A15.89,15.89,0,0,1,36.68,152l53.6-53.6-48-52.82a8.18,8.18,0,0,1-.37-10.75,8,8,0,0,1,12-.21Z" />
      </Svg>
    )
  })
)
