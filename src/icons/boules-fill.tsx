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
      <SvgPath d="M232,128c0,56.63-47.38,104-104,104a103.67,103.67,0,0,1-31.52-4.89,4,4,0,0,1-1.62-6.65L220.46,94.85a4,4,0,0,1,6.65,1.62A103.69,103.69,0,0,1,232,128ZM215.84,72.39a103.16,103.16,0,0,0-6.06-8.56,4,4,0,0,0-6-.33L63.5,203.82a4,4,0,0,0,.33,6,103.16,103.16,0,0,0,8.56,6.06,4,4,0,0,0,5-.54L215.3,77.39A4,4,0,0,0,215.84,72.39ZM192.17,46.22a103.16,103.16,0,0,0-8.56-6.06,4,4,0,0,0-5,.54L40.7,178.62a4,4,0,0,0-.54,5,103.16,103.16,0,0,0,6.06,8.56,4,4,0,0,0,6,.33L192.5,52.18A4,4,0,0,0,192.17,46.22ZM159.53,28.89A103.67,103.67,0,0,0,128,24C71.38,24,24,71.37,24,128a103.69,103.69,0,0,0,4.89,31.53,4,4,0,0,0,6.65,1.62L161.15,35.54A4,4,0,0,0,159.53,28.89Z" />
    </Svg>
  )
}

Icon.displayName = 'BoulesFill'

export const BoulesFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
