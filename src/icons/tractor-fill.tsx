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
      <SvgPath d="M80,172a12,12,0,1,1-12-12A12,12,0,0,1,80,172Zm40,0a52,52,0,1,1-52-52A52.06,52.06,0,0,1,120,172Zm-24,0a28,28,0,1,0-28,28A28,28,0,0,0,96,172Zm152,16a36,36,0,0,1-71.77,4H144a8,8,0,0,1-8-8V172a68.07,68.07,0,0,0-68-68H40a8,8,0,0,1,0-16h8V56H40a8,8,0,0,1,0-16H160a8,8,0,0,1,0,16h-8V97.88l24,6.5V72a8,8,0,0,1,16,0v36.71l36.39,9.86.21.06A15.89,15.89,0,0,1,240,134v31.46A35.8,35.8,0,0,1,248,188Zm-20,0a16,16,0,1,0-16,16A16,16,0,0,0,228,188Z" />
    </Svg>
  )
}

Icon.displayName = 'TractorFill'

export const TractorFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
