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
      <SvgPath d="M136,72a8,8,0,0,1,8-8h52.69L178.34,45.66a8,8,0,0,1,11.32-11.32l32,32a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L196.69,80H144A8,8,0,0,1,136,72Zm78.36,94.46-47.11-21.11-.11-.06a16,16,0,0,0-15.18,1.4,8.12,8.12,0,0,0-.75.56L126.87,168c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L89.54,41.64a16,16,0,0,0-16.62-9.51A56.24,56.24,0,0,0,24,88c0,79.4,64.6,144,144,144a56.24,56.24,0,0,0,55.87-48.92A16,16,0,0,0,214.36,166.46Z" />
    </Svg>
  )
}

Icon.displayName = 'PhoneTransferFill'

export const PhoneTransferFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
