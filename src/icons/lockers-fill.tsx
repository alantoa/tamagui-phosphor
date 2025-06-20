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

export const LockersFill: IconComponent = themed(
  memo(function LockersFill(props: IconProps) {
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
        <SvgPath d="M208,32H48A16,16,0,0,0,32,48V224a8,8,0,0,0,16,0V208h72v16a8,8,0,0,0,16,0V208h72v16a8,8,0,0,0,16,0V48A16,16,0,0,0,208,32ZM96,112H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm0-32H56a8,8,0,0,1,0-16H96a8,8,0,0,1,0,16Zm40,104a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Zm64-72H160a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H160a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z" />
      </Svg>
    )
  })
)
