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
      <SvgPath d="M232,198.65V240a8,8,0,0,1-16,0V198.65A74.84,74.84,0,0,0,192,144v58.35a8,8,0,0,1-14.69,4.38l-10.68-16.31c-.08-.12-.16-.25-.23-.38a12,12,0,0,0-20.89,11.83l22.13,33.79a8,8,0,0,1-13.39,8.76l-22.26-34-.24-.38c-.38-.66-.73-1.33-1.05-2H56a8,8,0,0,1-8-8V96A16,16,0,0,1,64,80h48v48a8,8,0,0,0,16,0V80h48a16,16,0,0,1,16,16v27.62A90.89,90.89,0,0,1,232,198.65ZM128,35.31l18.34,18.35a8,8,0,0,0,11.32-11.32l-32-32a8,8,0,0,0-11.32,0l-32,32A8,8,0,0,0,93.66,53.66L112,35.31V80h16Z" />
    </Svg>
  )
}

Icon.displayName = 'HandDepositFill'

export const HandDepositFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
