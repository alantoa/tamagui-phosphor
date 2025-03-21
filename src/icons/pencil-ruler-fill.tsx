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
      <SvgRect width={size} height={size} fill="none" />
      <SvgPath d="M224,48V208a16,16,0,0,1-16,16H160a16,16,0,0,1-16-16V180a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H148a4,4,0,0,1-4-4V140a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53,8.18,8.18,0,0,0-8.25-7.47H148a4,4,0,0,1-4-4V100a4,4,0,0,1,4-4h36a8,8,0,0,0,8-8.53A8.18,8.18,0,0,0,183.73,80H148a4,4,0,0,1-4-4V48a16,16,0,0,1,16-16h48A16,16,0,0,1,224,48ZM109.66,58.34A8,8,0,0,1,112,64V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V64a8,8,0,0,1,2.34-5.66l32-32a8,8,0,0,1,11.32,0ZM48,80V184H64V80Zm32,0V184H96V80ZM51.31,64H92.69L72,43.31Z" />
    </Svg>
  )
}

Icon.displayName = 'PencilRulerFill'

export const PencilRulerFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
