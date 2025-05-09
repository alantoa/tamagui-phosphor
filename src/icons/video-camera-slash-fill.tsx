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
      <SvgPath d="M256,80.23v95.45a8.33,8.33,0,0,1-3.86,7.17,8,8,0,0,1-8.58-.19l-33.78-22.52a4,4,0,0,1-1.78-3.33V99.19a4,4,0,0,1,1.78-3.32l33.78-22.53a8,8,0,0,1,9.73.66A8.23,8.23,0,0,1,256,80.23ZM53.92,34.62A8,8,0,1,0,42.08,45.38L51.73,56H32A16,16,0,0,0,16,72V184a16,16,0,0,0,16,16H182.64l19.44,21.38a8,8,0,1,0,11.84-10.76ZM185,155.07a4,4,0,0,0,7-2.7V72a16,16,0,0,0-16-16H104a4,4,0,0,0-3,6.69Z" />
    </Svg>
  )
}

Icon.displayName = 'VideoCameraSlashFill'

export const VideoCameraSlashFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
