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
    <Svg viewBox="0 0 256 256" width={size} height={size} {...otherProps}>
      <SvgRect width={size} height={size} fill="none" />
      <SvgPath d="M212,96a27.84,27.84,0,0,0-10.51,2L171,59.94A28,28,0,1,0,120,44a28.65,28.65,0,0,0,.15,2.94L73.68,66.3a28,28,0,1,0-28.6,44.83l1.85,46.38a28,28,0,1,0,32.74,41.42L128,212.47a28,28,0,1,0,49.13-18.79l27.21-42.75A28,28,0,1,0,212,96ZM71.19,104.36,113.72,129,72.26,161.22a28,28,0,0,0-9.34-4.35l-1.85-46.38A28,28,0,0,0,71.19,104.36ZM149.57,72a27.8,27.8,0,0,0,8.94-2L189,108.06a27.86,27.86,0,0,0-4.18,9.22l-46.57,2.22ZM82.09,173.85,124,141.26l15.94,47.83a28.2,28.2,0,0,0-7.6,8L84,183.53A28,28,0,0,0,82.09,173.85ZM156,184l-.89,0-16.18-48.53,46.65-2.22a27.94,27.94,0,0,0,5.28,9l-27.21,42.75A28,28,0,0,0,156,184ZM126.32,61.7A28.44,28.44,0,0,0,134,68.24l-11.3,47.45L79.23,90.52A28,28,0,0,0,80,84a28.65,28.65,0,0,0-.15-2.94Z" />
    </Svg>
  )
}

Icon.displayName = 'FediverseLogoFill'

export const FediverseLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
