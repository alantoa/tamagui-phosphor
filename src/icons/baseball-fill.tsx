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
      <SvgPath d="M209.35,63.28a4,4,0,0,0-5.8-.47,88.94,88.94,0,0,0-9.4,10,8.19,8.19,0,0,1-11,1.81A8,8,0,0,1,181.49,63a104.17,104.17,0,0,1,10.33-11.14,4,4,0,0,0-.22-6.09,103.79,103.79,0,0,0-127.2,0,4,4,0,0,0-.22,6.09A105.65,105.65,0,0,1,74.35,62.79,8.18,8.18,0,0,1,74,73.58,8,8,0,0,1,62,73a89.23,89.23,0,0,0-9.59-10.2,4,4,0,0,0-5.79.48,103.79,103.79,0,0,0,0,129.44,4,4,0,0,0,5.8.47,88.94,88.94,0,0,0,9.4-10,8.19,8.19,0,0,1,11-1.81A8,8,0,0,1,74.51,193a104.17,104.17,0,0,1-10.33,11.14,4,4,0,0,0,.22,6.09,103.79,103.79,0,0,0,127.2,0,4,4,0,0,0,.22-6.09A104.17,104.17,0,0,1,181.49,193a8,8,0,0,1,1.7-11.59,8.19,8.19,0,0,1,11,1.81,88.94,88.94,0,0,0,9.4,10,4,4,0,0,0,5.8-.47,103.79,103.79,0,0,0,0-129.44ZM81.71,88.3a8.18,8.18,0,0,1,9.79,5.29,105.1,105.1,0,0,1,4.34,16.77A8,8,0,0,1,88,120a8,8,0,0,1-8-7.35c-.38-4.44-1.11-8.91-3.2-12.84A8,8,0,0,1,81.71,88.3Zm14.13,57.29a103.54,103.54,0,0,1-4.43,17.08,8,8,0,0,1-11.17,4.46,8.19,8.19,0,0,1-3.82-10.08,87.84,87.84,0,0,0,3.69-14.37,8,8,0,0,1,10.18-6.35A8.17,8.17,0,0,1,95.84,145.59Zm79.92,21.54a8,8,0,0,1-11.17-4.46,103.54,103.54,0,0,1-4.43-17.08,8.18,8.18,0,0,1,5.55-9.26,8,8,0,0,1,10.18,6.35,87.84,87.84,0,0,0,3.69,14.37A8.19,8.19,0,0,1,175.76,167.13Zm3.41-67.32c-2.09,3.93-2.82,8.4-3.2,12.84a8,8,0,0,1-10.17,7,8.16,8.16,0,0,1-5.65-9.25A103.59,103.59,0,0,1,164.5,93.6a8.17,8.17,0,0,1,9.79-5.3A8,8,0,0,1,179.17,99.81Z" />
    </Svg>
  )
}

Icon.displayName = 'BaseballFill'

export const BaseballFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
