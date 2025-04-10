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
      <SvgPath d="M83.34,43.19a4,4,0,0,1,.78-6A80,80,0,0,1,190.39,154a4,4,0,0,1-6.11.22l-16.43-18.08a4,4,0,0,1-.3-5,48,48,0,0,0-62.84-69.11,4,4,0,0,1-4.94-.78ZM126.93,72a31.8,31.8,0,0,0-8.43,1.42A4,4,0,0,0,116.75,80l34.12,37.53a4,4,0,0,0,6.67-1.18A31.84,31.84,0,0,0,160,104,32.36,32.36,0,0,0,126.93,72Zm86.45,149.9a8,8,0,0,1-11.3-.54L197.19,216H32a8,8,0,0,1-8-8.53A8.17,8.17,0,0,1,32.27,200H120V183.6A79.93,79.93,0,0,1,58.86,63.84L42.08,45.38A8,8,0,1,1,53.92,34.62l160,176A8,8,0,0,1,213.38,221.92ZM128,152a48.17,48.17,0,0,0,10-1.06l-13.79-15.17A32,32,0,0,1,96,104.71L82.23,89.55A48,48,0,0,0,128,152Zm54.64,48-21.22-23.34A79.24,79.24,0,0,1,136,183.6V200Z" />
    </Svg>
  )
}

Icon.displayName = 'WebcamSlashFill'

export const WebcamSlashFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
