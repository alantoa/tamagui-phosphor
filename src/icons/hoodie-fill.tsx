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
      <SvgPath d="M237.31,120.53,183,39.12A16,16,0,0,0,169.73,32H86.27A16,16,0,0,0,73,39.12L18.69,120.53a16,16,0,0,0-2.13,13.09L38,212.21A16,16,0,0,0,53.43,224H80a16,16,0,0,0,16-16V192h64v16a16,16,0,0,0,16,16h26.57A16,16,0,0,0,218,212.21l21.44-78.59A16,16,0,0,0,237.31,120.53ZM80,208H53.43L32,129.41l32-48V176a16,16,0,0,0,16,16Zm40-72a8,8,0,0,1-16,0V97.14a8,8,0,1,1,16,0Zm32-8a8,8,0,0,1-16,0V97.14a8,8,0,1,1,16,0ZM128,78.71,83.35,52.39,86.27,48h83.46l2.92,4.39ZM202.57,208H176V192a16,16,0,0,0,16-16V81.41l32,48Z" />
    </Svg>
  )
}

Icon.displayName = 'HoodieFill'

export const HoodieFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
