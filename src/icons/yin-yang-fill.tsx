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
      <SvgPath d="M140,80a12,12,0,1,1-12-12A12,12,0,0,1,140,80Zm92,48A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-92,48a12,12,0,1,0-12,12A12,12,0,0,0,140,176Zm32-92a44.05,44.05,0,0,0-44-44A88,88,0,0,0,81.09,202.42,52,52,0,0,1,128,128,44.05,44.05,0,0,0,172,84Z" />
    </Svg>
  )
}

Icon.displayName = 'YinYangFill'

export const YinYangFill: (propsIn: IconProps) => JSX.Element = memo<IconProps>(
  themed(Icon)
)
