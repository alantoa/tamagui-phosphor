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
      <SvgPath d="M221.13,128A32,32,0,0,0,184,76.31V56a32,32,0,0,0-56-21.13A32,32,0,0,0,76.31,72H56a32,32,0,0,0-21.13,56A32,32,0,0,0,72,179.69V200a32,32,0,0,0,56,21.13A32,32,0,0,0,179.69,184H200a32,32,0,0,0,21.13-56ZM88,56a16,16,0,0,1,32,0V72H104A16,16,0,0,1,88,56ZM40,104A16,16,0,0,1,56,88h48a16,16,0,0,1,16,16v16H56A16,16,0,0,1,40,104Zm128,96a16,16,0,0,1-32,0V184h16A16,16,0,0,1,168,200Zm32-32H152a16,16,0,0,1-16-16V136h64a16,16,0,0,1,0,32Z" />
    </Svg>
  )
}

Icon.displayName = 'SlackLogoFill'

export const SlackLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
