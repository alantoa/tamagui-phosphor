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
      <SvgPath d="M239.84,60.33a8,8,0,0,1-4.65,5.75L179,90.55a71.42,71.42,0,0,1,43.36,33.21,70.64,70.64,0,0,1,7.2,54.32A8,8,0,0,1,217,182.36l-81-61.68V224a8,8,0,0,1-16,0V120.68L39,182.36a8,8,0,0,1-12.57-4.28,70.64,70.64,0,0,1,7.2-54.32A71.42,71.42,0,0,1,77,90.55L20.81,66.08a8,8,0,0,1-2.6-12.85,66.86,66.86,0,0,1,97.74,0,72.21,72.21,0,0,1,12,17,72.21,72.21,0,0,1,12.05-17,66.86,66.86,0,0,1,97.74,0A8,8,0,0,1,239.84,60.33Z" />
    </Svg>
  )
}

Icon.displayName = 'TreePalmFill'

export const TreePalmFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
