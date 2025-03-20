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
      <SvgPath d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,144a8,8,0,0,1,0,16H110.63L78,197.27a8,8,0,0,1-12-10.54L89.37,160H72a8,8,0,0,1,0-16h31.37l28-32H72a8,8,0,0,1,0-16h73.37L178,58.73a8,8,0,1,1,12,10.54L166.63,96H184a8,8,0,0,1,0,16H152.63l-28,32Z" />
    </Svg>
  )
}

Icon.displayName = 'NotEqualsFill'

export const NotEqualsFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
