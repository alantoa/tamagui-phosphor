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

export const FolderDashedFill: IconComponent = themed(
  memo(function FolderDashedFill(props: IconProps) {
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
        <SvgPath d="M96,208a8,8,0,0,1-8,8H39.38A15.4,15.4,0,0,1,24,200.62V192a8,8,0,0,1,16,0v8H88A8,8,0,0,1,96,208Zm64-8H128a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm64-56a8,8,0,0,0-8,8v48H200a8,8,0,0,0,0,16h16.89A15.13,15.13,0,0,0,232,200.89V152A8,8,0,0,0,224,144Zm-8-72H168a8,8,0,0,0,0,16h48v24a8,8,0,0,0,16,0V88A16,16,0,0,0,216,72ZM32,88h96a8,8,0,0,0,5.66-13.66L104,44.69A15.86,15.86,0,0,0,92.69,40H40A16,16,0,0,0,24,56V80A8,8,0,0,0,32,88Zm0,72a8,8,0,0,0,8-8V120a8,8,0,0,0-16,0v32A8,8,0,0,0,32,160Z" />
      </Svg>
    )
  })
)
