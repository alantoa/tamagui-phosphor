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
      <SvgPath d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm59.43,129.07a8,8,0,0,1-4,14.93,7.92,7.92,0,0,1-4-1.07L136,141.86V192a8,8,0,0,1-16,0V141.86L76.57,166.93A8,8,0,0,1,65.65,164a8,8,0,0,1,2.92-10.93L112,128,68.57,102.93a8,8,0,0,1,8-13.86L120,114.14V64a8,8,0,0,1,16,0v50.14l43.43-25.07a8,8,0,0,1,8,13.86L144,128Z" />
    </Svg>
  )
}

Icon.displayName = 'AsteriskFill'

export const AsteriskFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
