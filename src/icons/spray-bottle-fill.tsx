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
      <SvgPath d="M200,80a8,8,0,0,0,8-8,56.06,56.06,0,0,0-56-56H80A16,16,0,0,0,64,32V80a24,24,0,0,1-24,24,8,8,0,0,0,0,16A40,40,0,0,0,80,80h32v24.62a23.87,23.87,0,0,1-9,18.74L87,136.15a39.79,39.79,0,0,0-15,31.23V224a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V211.47A270.88,270.88,0,0,0,174,80ZM80,32h72a40.08,40.08,0,0,1,39.2,32H80Z" />
    </Svg>
  )
}

Icon.displayName = 'SprayBottleFill'

export const SprayBottleFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
