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
      <SvgPath d="M224,162.16V144a96.18,96.18,0,0,0-72.34-93,28,28,0,1,0-47.32,0A96.18,96.18,0,0,0,32,144v18.16A16,16,0,0,0,24,176v32a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V176A16,16,0,0,0,224,162.16ZM120,176v32H80V176Zm16,0h40v32H136ZM116,36a12,12,0,1,1,12,12A12,12,0,0,1,116,36ZM40,176H64v32H40Zm176,32H192V176h24v32Z" />
    </Svg>
  )
}

Icon.displayName = 'BeanieFill'

export const BeanieFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
