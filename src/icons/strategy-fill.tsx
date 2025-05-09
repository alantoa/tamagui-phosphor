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
      <SvgPath d="M108,188a32,32,0,1,1-32-32A32,32,0,0,1,108,188ZM53.66,117.66,68,103.31l14.34,14.35a8,8,0,0,0,11.32-11.32L79.31,92,93.66,77.66A8,8,0,0,0,82.34,66.34L68,80.69,53.66,66.34A8,8,0,0,0,42.34,77.66L56.69,92,42.34,106.34a8,8,0,0,0,11.32,11.32ZM215.31,188l14.35-14.34a8,8,0,0,0-11.32-11.32L204,176.69l-14.34-14.35a8,8,0,0,0-11.32,11.32L192.69,188l-14.35,14.34a8,8,0,0,0,11.32,11.32L204,199.31l14.34,14.35a8,8,0,0,0,11.32-11.32ZM165.66,50.34,163.31,48H184a8,8,0,0,0,0-16H144a8,8,0,0,0-8,8V80a8,8,0,0,0,16,0V59.31l2.34,2.35c17.93,17.93,17.9,35.4,14.71,46.9-4.64,16.77-19.36,31.77-35,35.68A8,8,0,0,0,136,160a8.13,8.13,0,0,0,1.95-.24c21.21-5.3,40.35-24.6,46.53-46.93C190.58,90.78,183.9,68.59,165.66,50.34Z" />
    </Svg>
  )
}

Icon.displayName = 'StrategyFill'

export const StrategyFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
