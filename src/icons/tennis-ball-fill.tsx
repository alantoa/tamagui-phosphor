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
      <SvgPath d="M24.81,115.41a103.9,103.9,0,0,1,90.6-90.65,4,4,0,0,1,4.47,3.79,87.82,87.82,0,0,1-91.27,91.33A4,4,0,0,1,24.81,115.41Zm202.54,20.7c-1.12,0-2.23-.07-3.35-.07a87.84,87.84,0,0,0-87.88,91.41,4,4,0,0,0,4.47,3.79,103.9,103.9,0,0,0,90.6-90.66A4,4,0,0,0,227.35,136.11Zm-76.89,14.35A103.33,103.33,0,0,1,224,120c1,0,2.06,0,3.09,0a4,4,0,0,0,4.12-4.43,103.91,103.91,0,0,0-90.88-90.89,4,4,0,0,0-4.43,4.12,103.72,103.72,0,0,1-30.36,76.7A103.33,103.33,0,0,1,32,136c-1,0-2.06,0-3.09,0a4,4,0,0,0-4.12,4.43,103.91,103.91,0,0,0,90.88,90.89,4,4,0,0,0,4.43-4.12A103.72,103.72,0,0,1,150.46,150.46Z" />
    </Svg>
  )
}

Icon.displayName = 'TennisBallFill'

export const TennisBallFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
