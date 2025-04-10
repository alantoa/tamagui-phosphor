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
      <SvgPath d="M212.28,43.72a40,40,0,0,0-56.56,0l-24,24a8,8,0,0,0-2.23,4.3C120.69,123.28,36,208.73,34.36,210.33h0a8,8,0,0,0,11.31,11.32h0c.86-.87,86.83-86.31,138.32-95.15a8,8,0,0,0,4.3-2.23l24-24a40,40,0,0,0,0-56.56ZM189.66,77.66l-16,16a8,8,0,0,1-11.32-11.32l16-16a8,8,0,0,1,11.32,11.32Z" />
    </Svg>
  )
}

Icon.displayName = 'NeedleFill'

export const NeedleFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
