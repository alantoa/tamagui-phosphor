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
      <SvgPath d="M88.57,35A8,8,0,0,1,103.43,29l8,20A8,8,0,0,1,96.57,55ZM29,103.43l20,8A8,8,0,1,0,55,96.57l-20-8A8,8,0,0,0,29,103.43ZM227,152.57l-20-8A8,8,0,1,0,201,159.43l20,8A8,8,0,0,0,227,152.57ZM159.43,201A8,8,0,0,0,144.57,207l8,20A8,8,0,1,0,167.43,221ZM237.91,18.52a8,8,0,0,0-11.5-.18L174,70.75l-5.38-5.38a32,32,0,0,0-45.28,0L106.14,82.54a4,4,0,0,0,0,5.66l61.7,61.66a4,4,0,0,0,5.66,0l16.74-16.74a32.76,32.76,0,0,0,9.81-22.52,31.82,31.82,0,0,0-9.37-23.17l-5.38-5.37,52.2-52.17A8.22,8.22,0,0,0,237.91,18.52ZM85.64,90.34a8,8,0,0,0-11.49.18,8.22,8.22,0,0,0,.41,11.37L80.67,108,65.34,123.31A31.82,31.82,0,0,0,56,146.47,32.75,32.75,0,0,0,65.77,169l5,4.94L18.49,226.13a8.21,8.21,0,0,0-.61,11.1,8,8,0,0,0,11.72.43L82,185.25l5.37,5.38a32.1,32.1,0,0,0,45.29,0L148,175.31l6.34,6.35a8,8,0,0,0,11.32-11.32Z" />
    </Svg>
  )
}

Icon.displayName = 'PlugsConnectedFill'

export const PlugsConnectedFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
