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
      <SvgPath d="M184,80a8,8,0,0,1,8-8h24a8,8,0,0,1,0,16H192A8,8,0,0,1,184,80ZM40,88h96v16a8,8,0,0,0,8,8h16a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H144a8,8,0,0,0-8,8V72H40a8,8,0,0,0,0,16Zm176,80H128a8,8,0,0,0,0,16h88a8,8,0,0,0,0-16ZM96,144H80a8,8,0,0,0-8,8v16H40a8,8,0,0,0,0,16H72v16a8,8,0,0,0,8,8H96a8,8,0,0,0,8-8V152A8,8,0,0,0,96,144Z" />
    </Svg>
  )
}

Icon.displayName = 'FadersHorizontalFill'

export const FadersHorizontalFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
