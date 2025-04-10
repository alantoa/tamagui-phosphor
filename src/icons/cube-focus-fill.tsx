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
      <SvgPath d="M232,48V88a8,8,0,0,1-16,0V56H184a8,8,0,0,1,0-16h40A8,8,0,0,1,232,48ZM72,200H40V168a8,8,0,0,0-16,0v40a8,8,0,0,0,8,8H72a8,8,0,0,0,0-16Zm152-40a8,8,0,0,0-8,8v32H184a8,8,0,0,0,0,16h40a8,8,0,0,0,8-8V168A8,8,0,0,0,224,160ZM32,96a8,8,0,0,0,8-8V56H72a8,8,0,0,0,0-16H32a8,8,0,0,0-8,8V88A8,8,0,0,0,32,96ZM177.92,83.31,132,57.05a8,8,0,0,0-7.94,0L78.08,83.31a4,4,0,0,0,0,7L128,118.79l49.92-28.53A4,4,0,0,0,177.92,83.31ZM64,107.53V160A8,8,0,0,0,68,167l46,26.27a4,4,0,0,0,6-3.47V132.64L70,104.06A4,4,0,0,0,64,107.53ZM192,160V107.53a4,4,0,0,0-6-3.47l-50,28.58v57.11a4,4,0,0,0,6,3.47L188,167A8,8,0,0,0,192,160Z" />
    </Svg>
  )
}

Icon.displayName = 'CubeFocusFill'

export const CubeFocusFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
