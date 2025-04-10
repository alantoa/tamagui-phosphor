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
      <SvgPath d="M154.31,156.92,137.83,180l16.53,23.14a8.18,8.18,0,0,1-1.22,11,8,8,0,0,1-11.65-1.48L128,193.76l-13.49,18.89a8,8,0,0,1-11.64,1.49,8.17,8.17,0,0,1-1.23-11L118.17,180l-16.48-23.08a8.22,8.22,0,0,1,1.46-11.28,8,8,0,0,1,11.36,1.71L128,166.24l13.49-18.89a8,8,0,0,1,11.36-1.71A8.22,8.22,0,0,1,154.31,156.92ZM84,144H44.27A8.18,8.18,0,0,0,36,151.47,8,8,0,0,0,44,160H56v47.73A8.17,8.17,0,0,0,63.47,216,8,8,0,0,0,72,208V160H83.73A8.18,8.18,0,0,0,92,152.53,8,8,0,0,0,84,144Zm128,0H172.27a8.18,8.18,0,0,0-8.25,7.47,8,8,0,0,0,8,8.53h12v47.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V160h11.73a8.18,8.18,0,0,0,8.25-7.47A8,8,0,0,0,212,144ZM40,116V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88v28a4,4,0,0,1-4,4H44A4,4,0,0,1,40,116ZM152,88h44L152,44Z" />
    </Svg>
  )
}

Icon.displayName = 'FileTxtFill'

export const FileTxtFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
