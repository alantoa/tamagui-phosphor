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
      <SvgPath d="M136,143.37l46,32.2a71.86,71.86,0,0,1-46,24ZM56,128a71.61,71.61,0,0,0,8.81,34.48L120,123.84V56.46A72.08,72.08,0,0,0,56,128Zm64,71.54V143.37l-46,32.2A71.86,71.86,0,0,0,120,199.54ZM136,56.46v67.38l55.19,38.64A72,72,0,0,0,136,56.46ZM232,128A104,104,0,1,1,128,24,104.11,104.11,0,0,1,232,128Zm-16,0a88,88,0,1,0-88,88A88.1,88.1,0,0,0,216,128Z" />
    </Svg>
  )
}

Icon.displayName = 'PeaceFill'

export const PeaceFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
