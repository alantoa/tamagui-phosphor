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
      <SvgPath d="M147.31,128H208a8,8,0,0,0,5.66-13.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,48,128h60.69L42.34,194.34A8,8,0,0,0,48,208H208a8,8,0,0,0,5.66-13.66Z" />
    </Svg>
  )
}

Icon.displayName = 'CaretDoubleUpFill'

export const CaretDoubleUpFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
