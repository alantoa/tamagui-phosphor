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
      <SvgPath d="M222.53,144.83A96.09,96.09,0,0,0,111.17,33.47,55.38,55.38,0,0,0,80,24,56.06,56.06,0,0,0,24,80a55.38,55.38,0,0,0,9.47,31.17A96.09,96.09,0,0,0,144.83,222.53,55.38,55.38,0,0,0,176,232a56.06,56.06,0,0,0,56-56A55.38,55.38,0,0,0,222.53,144.83ZM128,184c-22.06,0-40-14.36-40-32a8,8,0,0,1,16,0c0,8.67,11,16,24,16s24-7.33,24-16c0-9.48-8.61-13-26.88-18.26C109.37,129.2,89.78,123.55,89.78,104c0-18.24,16.43-32,38.22-32,15.72,0,29.18,7.3,35.12,19a8,8,0,1,1-14.27,7.22C145.64,91.94,137.65,88,128,88c-12.67,0-22.22,6.88-22.22,16,0,7,9,10.1,23.77,14.36C145.78,123,168,129.45,168,152,168,169.64,150.06,184,128,184Z" />
    </Svg>
  )
}

Icon.displayName = 'SkypeLogoFill'

export const SkypeLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
