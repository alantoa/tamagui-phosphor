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
    <Svg viewBox="0 0 256 256" width={size} height={size} {...otherProps}>
      <SvgRect width={size} height={size} fill="none" />
      <SvgPath d="M216,64v80a87.66,87.66,0,0,1-5.45,30.49,4,4,0,0,1-6.7,1.27L162.52,130.3a4,4,0,0,1,1-6.16A87.36,87.36,0,0,1,200,112.37V72.45a72.33,72.33,0,0,0-50.35,29.36A8,8,0,0,1,137.72,103a8.17,8.17,0,0,1-.89-10.75,88.06,88.06,0,0,1,25-23.11C152.62,49.8,135.45,37.74,128,33.2a99.79,99.79,0,0,0-23.4,19.94,8,8,0,0,1-12,.27,8.18,8.18,0,0,1-.06-10.8,112.35,112.35,0,0,1,31.86-25.76,8,8,0,0,1,7.16,0c1.32.66,30.27,15.43,44.59,45.15a87.86,87.86,0,0,1,31.74-6A8,8,0,0,1,216,64Zm-2.08,146.62a8,8,0,1,1-11.84,10.76l-12.9-14.19A87.77,87.77,0,0,1,128.52,232C79.83,232.28,40,191.51,40,142.83V64a8,8,0,0,1,8.09-8c1.25,0,2.48,0,3.72.09L42.08,45.38A8,8,0,1,1,53.92,34.62Zm-77.6-61.57L69.18,75.19A71.31,71.31,0,0,0,56,72.44v39.94a88.17,88.17,0,0,1,72,51A88.22,88.22,0,0,1,136.32,149.05Z" />
    </Svg>
  )
}

Icon.displayName = 'GrainsSlashFill'

export const GrainsSlashFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
