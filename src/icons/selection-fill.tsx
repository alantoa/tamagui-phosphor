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
      <SvgPath d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM104,200H72a16,16,0,0,1-16-16V152a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Zm0-128H72v32a8,8,0,0,1-16,0V72A16,16,0,0,1,72,56h32a8,8,0,0,1,0,16Zm96,112a16,16,0,0,1-16,16H152a8,8,0,0,1,0-16h32V152a8,8,0,0,1,16,0Zm0-80a8,8,0,0,1-16,0V72H152a8,8,0,0,1,0-16h32a16,16,0,0,1,16,16Z" />
    </Svg>
  )
}

Icon.displayName = 'SelectionFill'

export const SelectionFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
