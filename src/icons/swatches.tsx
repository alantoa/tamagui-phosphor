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
      <_Circle cx="76" cy="180" r="12" />
      <SvgPath
        d="M110.84,186.25a35.71,35.71,0,0,1-41.34,29.2h0a36,36,0,0,1-28.95-41.71l25-143.13a8,8,0,0,1,9.19-6.49l54.67,9.73a8,8,0,0,1,6.44,9.26Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M232,156.19V208a8,8,0,0,1-8,8H76"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M121.42,125.76l80.79-29.28a8,8,0,0,1,10.22,4.75l19.09,52.21a7.93,7.93,0,0,1-4.77,10.17L88.16,213.84A35.07,35.07,0,0,1,76,216"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'Swatches'

export const Swatches: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
