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
      <SvgPath d="M88,64a40,40,0,1,1,48,39.19V176a8,8,0,0,1-16,0V103.19A40.05,40.05,0,0,1,88,64Zm130,82.59c-12.26-6.94-29.12-12.27-48.77-15.42A8,8,0,1,0,166.73,147c17.54,2.82,33,7.63,43.42,13.55C219,165.5,224,171.14,224,176c0,13.36-36.52,32-96,32s-96-18.64-96-32c0-4.86,5-10.5,13.85-15.49,10.46-5.92,25.88-10.73,43.42-13.55a8,8,0,1,0-2.54-15.79c-19.65,3.15-36.51,8.48-48.77,15.42C19.81,156.87,16,168.26,16,176c0,31.18,57.71,48,112,48s112-16.82,112-48C240,168.26,236.19,156.87,218,146.59Z" />
    </Svg>
  )
}

Icon.displayName = 'MapPinSimpleAreaFill'

export const MapPinSimpleAreaFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
