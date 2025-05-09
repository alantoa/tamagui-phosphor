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
      <SvgPath
        d="M26.34,128.88,55,157.54a8,8,0,0,0,11.37-.06L127.29,95a24,24,0,0,1,33.61-.33c9.69,9.34,9.46,25.14-.05,34.65L98.54,189.6a8,8,0,0,0-.08,11.4l28.66,28.66a8,8,0,0,0,11.26.05l61.74-60.43c31.19-31.19,32.1-82,1.14-113.42a80,80,0,0,0-113.57-.43L26.31,117.6A8,8,0,0,0,26.34,128.88Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="128.57"
        y1="160.57"
        x2="168.36"
        y2="200.36"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="55.77"
        y1="87.77"
        x2="95.56"
        y2="127.56"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'Magnet'

export const Magnet: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
