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
      <SvgPath d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM60.4,71.72,77.47,88.79a63.66,63.66,0,0,0-13,31.21H40.37A87.6,87.6,0,0,1,60.4,71.72ZM40.37,136H64.52a63.66,63.66,0,0,0,13,31.21L60.4,184.28A87.6,87.6,0,0,1,40.37,136ZM120,215.63a87.6,87.6,0,0,1-48.28-20l17.07-17.07A63.66,63.66,0,0,0,120,191.48Zm0-151.11a63.66,63.66,0,0,0-31.21,13L71.72,60.4a87.6,87.6,0,0,1,48.28-20ZM215.63,120H191.48a63.66,63.66,0,0,0-12.95-31.21L195.6,71.72A87.6,87.6,0,0,1,215.63,120ZM136,40.37a87.6,87.6,0,0,1,48.28,20L167.21,77.47a63.66,63.66,0,0,0-31.21-13Zm0,175.26V191.48a63.66,63.66,0,0,0,31.21-12.95l17.07,17.07A87.6,87.6,0,0,1,136,215.63Zm59.6-31.35-17.07-17.07A63.66,63.66,0,0,0,191.48,136h24.15A87.6,87.6,0,0,1,195.6,184.28Z" />
    </Svg>
  )
}

Icon.displayName = 'PokerChipFill'

export const PokerChipFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
