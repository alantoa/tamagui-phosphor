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
      <SvgPath d="M60.18,129.52a4,4,0,0,1-6.15,2L22.66,109a15.78,15.78,0,0,1-5.82-18A16.33,16.33,0,0,1,32.43,80H70.74a4,4,0,0,1,3.81,5.24Zm-7,73.48A15.75,15.75,0,0,0,59,220.88a15.74,15.74,0,0,0,18.77,0l32.05-23.06a4,4,0,0,0,0-6.5L71.38,163.72a4,4,0,0,0-6.14,2ZM143.23,19.26a15.93,15.93,0,0,0-30.45-.05L100,58.76A4,4,0,0,0,103.76,64h48.48a4,4,0,0,0,3.81-5.23ZM160,80H96a4,4,0,0,0-3.8,2.77L73,141.77a4,4,0,0,0,1.47,4.48l51.17,36.82a4,4,0,0,0,4.68,0l51.17-36.82a4,4,0,0,0,1.47-4.48l-19.15-59A4,4,0,0,0,160,80Zm79.13,11a16.33,16.33,0,0,0-15.59-11H185.26a4,4,0,0,0-3.81,5.24l14.37,44.29a4,4,0,0,0,6.14,2l31.41-22.6A15.75,15.75,0,0,0,239.16,91Zm-54.55,72.75-38.4,27.63a4,4,0,0,0,0,6.5l32,23A16,16,0,0,0,202.85,203l-12.09-37.27A4,4,0,0,0,184.61,163.72Z" />
    </Svg>
  )
}

Icon.displayName = 'PentagramFill'

export const PentagramFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
