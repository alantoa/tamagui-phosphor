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
      <SvgPath d="M256,168a8,8,0,0,1-8,8H8A8,8,0,0,1,.37,165.6L22.63,91.4A15.89,15.89,0,0,1,38,80h84.1a15.89,15.89,0,0,1,15.32,11.4L158,160h15.3L150.79,85.15A4,4,0,0,1,154.62,80h15.43a16,16,0,0,1,15.32,11.4L206,160h15.3L198.79,85.15A4,4,0,0,1,202.62,80h15.43a16,16,0,0,1,15.32,11.4l22.26,74.18A8.11,8.11,0,0,1,256,168Z" />
    </Svg>
  )
}

Icon.displayName = 'TabsFill'

export const TabsFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
