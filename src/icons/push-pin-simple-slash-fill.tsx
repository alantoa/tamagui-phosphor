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
      <SvgPath d="M79.25,38.69a4,4,0,0,1,3-6.69H192a8,8,0,0,1,8,8.53A8.17,8.17,0,0,1,191.73,48h-6.19L206.7,167.91a4,4,0,0,1-6.9,3.39ZM213.92,210.62l-160-176A8,8,0,1,0,42.08,45.38L66.24,72,49.29,168H40a8,8,0,0,0,0,16h80v56a8,8,0,0,0,16,0V184h32.1l34,37.38a8,8,0,1,0,11.84-10.76Z" />
    </Svg>
  )
}

Icon.displayName = 'PushPinSimpleSlashFill'

export const PushPinSimpleSlashFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
