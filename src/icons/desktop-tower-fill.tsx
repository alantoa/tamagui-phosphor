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
      <SvgPath d="M120,76V188a4,4,0,0,1-4,4H96v16h15.73a8.18,8.18,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53H64.27A8.18,8.18,0,0,1,56,216.53,8,8,0,0,1,64,208H80V192H32A24,24,0,0,1,8,168V96A24,24,0,0,1,32,72h84A4,4,0,0,1,120,76ZM248,48V208a16,16,0,0,1-16,16H152a16,16,0,0,1-16-16V48a16,16,0,0,1,16-16h80A16,16,0,0,1,248,48ZM203.9,181.57a12,12,0,1,0-10.34,10.33A12,12,0,0,0,203.9,181.57ZM224,103.47A8.18,8.18,0,0,0,215.73,96H168.27a8.18,8.18,0,0,0-8.25,7.47,8,8,0,0,0,8,8.53h48A8,8,0,0,0,224,103.47Zm0-32A8.18,8.18,0,0,0,215.73,64H168.27A8.18,8.18,0,0,0,160,71.47,8,8,0,0,0,168,80h48A8,8,0,0,0,224,71.47Z" />
    </Svg>
  )
}

Icon.displayName = 'DesktopTowerFill'

export const DesktopTowerFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
