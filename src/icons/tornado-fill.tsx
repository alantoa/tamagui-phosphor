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
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="currentColor"
      {...otherProps}
    >
      <SvgRect width="256" height="256" fill="none" />
      <SvgPath d="M144,228a12,12,0,0,1-12,12H116a12,12,0,0,1,0-24h16A12,12,0,0,1,144,228ZM220,32H60a12,12,0,0,0,0,24,12,12,0,0,1,0,24H44a12,12,0,0,0,0,24H76a12,12,0,0,1,0,24,12,12,0,0,0,0,24h48a12,12,0,0,1,0,24,12,12,0,0,0,0,24h48a12,12,0,0,0,0-24,12,12,0,0,1,0-24h16a12,12,0,0,0,0-24H164a12,12,0,0,1,0-24,12,12,0,0,0,0-24,12,12,0,0,1,0-24h56a12,12,0,0,0,0-24Z" />
    </Svg>
  )
}

Icon.displayName = 'TornadoFill'

export const TornadoFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
