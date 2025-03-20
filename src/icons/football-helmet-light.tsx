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

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 256 256" {...otherProps}>
      <SvgRect width="256" height="256" fill="none" />
      <_Circle cx="84" cy="164" r="10" />
      <SvgPath
        d="M120,200a8,8,0,0,0,7.81-9.74l-15.62-52.52A8,8,0,0,1,120,128h96v-4a92,92,0,0,0-93.31-92C72.65,32.71,32,73.92,32,124a91.91,91.91,0,0,0,40.14,76Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
      <SvgPath
        d="M148,128l24.31,82.27A8,8,0,0,0,180,216h36a8,8,0,0,0,8-8V176a8,8,0,0,0-8-8H121.19"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="12"
      />
    </Svg>
  )
}

Icon.displayName = 'FootballHelmetLight'

export const FootballHelmetLight: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
