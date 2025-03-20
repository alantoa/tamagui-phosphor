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
      <SvgPath d="M32,208V48H208a16,16,0,0,1,16,16V208Z" opacity="0.2" />
      <SvgPolyline
        points="224 208 32 208 32 48"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <_Circle cx="132" cy="148" r="12" />
      <_Circle cx="108" cy="92" r="12" />
      <_Circle cx="76" cy="164" r="12" />
      <_Circle cx="172" cy="116" r="12" />
      <_Circle cx="196" cy="76" r="12" />
      <_Circle cx="188" cy="164" r="12" />
    </Svg>
  )
}

Icon.displayName = 'ChartScatterDuotone'

export const ChartScatterDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
