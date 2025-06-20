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
      <SvgPath d="M143.55,136H160v23ZM96,120h16.45L96,97Zm136,8A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-32,0a8,8,0,0,0-8-8H176V72a8,8,0,0,0-16,0v48H132.12L94.51,67.35A8,8,0,0,0,80,72v48H64a8,8,0,0,0,0,16H80v48a8,8,0,0,0,16,0V136h27.88l37.61,52.65A8,8,0,0,0,168,192a7.91,7.91,0,0,0,2.44-.38A8,8,0,0,0,176,184V136h16A8,8,0,0,0,200,128Z" />
    </Svg>
  )
}

Icon.displayName = 'CurrencyNgnFill'

export const CurrencyNgnFill: (propsIn: IconProps) => JSX.Element = memo<IconProps>(
  themed(Icon)
)
