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
      <SvgPath d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM160,176a8,8,0,0,1,0,16H96a8,8,0,0,1-5.79-13.52L145.9,120a24,24,0,0,0-35.73-32A23.33,23.33,0,0,0,107,92.38a8,8,0,0,1-14-7.77,40.22,40.22,0,0,1,5.28-7.38,40,40,0,0,1,59.45,53.54l-.16.16L114.66,176Z" />
    </Svg>
  )
}

Icon.displayName = 'NumberTwoFill'

export const NumberTwoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
