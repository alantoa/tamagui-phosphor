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
      <SvgPath d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM184,48h24V88H184Zm0,56h24v48H184Zm-38,71.75a8,8,0,0,1-9.74-5.76c-2.63-10.26-13.06-18-24.25-18s-21.61,7.74-24.25,18a8,8,0,0,1-15.5-4,39.84,39.84,0,0,1,17.19-23.34,32,32,0,1,1,45.12,0A39.76,39.76,0,0,1,151.75,166,8,8,0,0,1,146,175.75ZM208,208H184V168h24v40Zm-80-88a16,16,0,1,1-16-16A16,16,0,0,1,128,120Z" />
    </Svg>
  )
}

Icon.displayName = 'AddressBookTabsFill'

export const AddressBookTabsFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
