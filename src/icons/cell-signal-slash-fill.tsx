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
      <SvgRect width={size} height={size} fill="none" />
      <SvgPath d="M213.38,221.92a8,8,0,0,1-11.3-.54l-5.51-6.06A16.11,16.11,0,0,1,192,216H32a16,16,0,0,1-15.06-10.59,16.4,16.4,0,0,1,4.07-17l79.13-79.12L42.26,45.62a8.22,8.22,0,0,1,.14-11.38,8,8,0,0,1,11.48.37l160,176A8,8,0,0,1,213.38,221.92ZM201,172.66a4,4,0,0,0,7-2.69V40a16,16,0,0,0-27.32-11.32l-55.21,55.2a4,4,0,0,0-.13,5.52Z" />
    </Svg>
  )
}

Icon.displayName = 'CellSignalSlashFill'

export const CellSignalSlashFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
