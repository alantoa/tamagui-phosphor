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
      <SvgPath d="M236.28,177.85a16,16,0,0,1-18.38,5.07l-24.76-19a3.43,3.43,0,0,1-.53-.48L109.18,71.62a4,4,0,0,1,2.55-6.68c43-4.62,87.74,9.12,119.86,41.24h0C251.58,126.17,253.51,155.64,236.28,177.85ZM53.93,34.62A8,8,0,1,0,42.09,45.38L69.71,75.77a142,142,0,0,0-45.3,30.41c-20,20-21.92,49.46-4.69,71.67a16,16,0,0,0,18.38,5.07l49-17.37.29-.11a16,16,0,0,0,9.75-11.72l5.9-29.51a73.64,73.64,0,0,1,8.57-2.39l90.5,99.56a8,8,0,1,0,11.84-10.76Z" />
    </Svg>
  )
}

Icon.displayName = 'PhoneSlashFill'

export const PhoneSlashFill: (propsIn: IconProps) => JSX.Element = memo<IconProps>(
  themed(Icon)
)
