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

export const DresserFill: IconComponent = themed(
  memo(function DresserFill(props: IconProps) {
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
        <SvgPath d="M200,24H56A16,16,0,0,0,40,40V80a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V40A16,16,0,0,0,200,24ZM136,64H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Zm76,36H44a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V104A4,4,0,0,0,212,100Zm-76,36H120.27a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h15.73a8.18,8.18,0,0,1,8.25,7.47A8,8,0,0,1,136,136Zm76,36H44a4,4,0,0,0-4,4v40a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V176A4,4,0,0,0,212,172Zm-76,36H120a8,8,0,0,1,0-16h16a8,8,0,0,1,0,16Z" />
      </Svg>
    )
  })
)
