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
    <Svg viewBox="0 0 256 256" {...otherProps}>
      <SvgRect width="256" height="256" fill="none" />
      <SvgPath d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM80,72a8,8,0,0,1,16,0v48a32,32,0,0,0,64,0V72a8,8,0,0,1,16,0v48a48,48,0,0,1-96,0Zm96,128H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16Z" />
    </Svg>
  )
}

Icon.displayName = 'TextUnderlineFill'

export const TextUnderlineFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
