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
      <SvgPath d="M245.66,69.66a8,8,0,0,1-11.32,0L216,51.31l-71,71L133.66,111l71-71L186.34,21.66a8,8,0,0,1,11.32-11.32l48,48A8,8,0,0,1,245.66,69.66ZM88,176a8,8,0,0,1-5.66-13.66L133.66,111,99.31,76.68a16,16,0,0,0-22.62,0l-56,56A15.89,15.89,0,0,0,16,144v80a16,16,0,0,0,16,16h80a15.86,15.86,0,0,0,11.31-4.69l56-56a16,16,0,0,0,0-22.62L145,122.34,93.66,173.66A8,8,0,0,1,88,176Z" />
    </Svg>
  )
}

Icon.displayName = 'ShovelFill'

export const ShovelFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
