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
      <SvgPath d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM82.71,94.58C86,76.57,104.58,64,128,64c18.2,0,33.59,7.41,41.18,19.83a8,8,0,1,1-13.66,8.34C150.94,84.66,140.39,80,128,80c-15.3,0-27.73,7.33-29.55,17.42A8,8,0,0,1,90.59,104a7.76,7.76,0,0,1-1.43-.13A8,8,0,0,1,82.71,94.58ZM192,136H168.29A28.45,28.45,0,0,1,176,156c0,20.19-21.08,36-48,36-23.89,0-43.83-12.78-47.43-30.4a8,8,0,1,1,15.67-3.2c2,9.87,16,17.6,31.76,17.6,17.35,0,32-9.16,32-20,0-9.14-6.76-14.43-25.72-20H64a8,8,0,0,1,0-16H192a8,8,0,0,1,0,16Z" />
    </Svg>
  )
}

Icon.displayName = 'TextStrikethroughFill'

export const TextStrikethroughFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
