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
      <SvgPath d="M207,40H49A17,17,0,0,0,32,57v49.21a17,17,0,0,0,10,15.47l62.6,28.45a48,48,0,1,0,46.88,0L214,121.68a17,17,0,0,0,10-15.47V57A17,17,0,0,0,207,40ZM96,56h64v72.67l-32,14.54L96,128.67Zm32,168a32,32,0,1,1,32-32A32,32,0,0,1,128,224Z" />
    </Svg>
  )
}

Icon.displayName = 'MedalMilitaryFill'

export const MedalMilitaryFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
