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
      <SvgPath d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM172,168a12,12,0,0,0,12-12,8,8,0,0,1,16,0,28,28,0,0,1-56,0V96H112v80a8,8,0,0,1-16,0V96H88a24,24,0,0,0-24,24,8,8,0,0,1-16,0A40,40,0,0,1,88,80H192a8,8,0,0,1,0,16H160v60A12,12,0,0,0,172,168Z" />
    </Svg>
  )
}

Icon.displayName = 'PiFill'

export const PiFill: (propsIn: IconProps) => JSX.Element = memo<IconProps>(themed(Icon))
