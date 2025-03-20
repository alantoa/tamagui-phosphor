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
    <Svg viewBox="0 0 256 256" width={size} height={size} {...otherProps}>
      <SvgRect width={size} height={size} fill="none" />
      <SvgPath d="M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152ZM120,144H104a8,8,0,0,0-8,8v55.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8v-8h7.4c15.24,0,28.13-11.92,28.59-27.15A28,28,0,0,0,120,144Zm-.35,40H112V160h8a12,12,0,0,1,11.94,13.16A12.23,12.23,0,0,1,119.65,184ZM216,200.87a8,8,0,0,1-2.26,5.57A30,30,0,0,1,192,216c-17.64,0-32-16.15-32-36s14.36-36,32-36a29.36,29.36,0,0,1,16.09,4.86,8.21,8.21,0,0,1,3,10.64,8,8,0,0,1-11.55,2.88A13.21,13.21,0,0,0,192,160c-8.82,0-16,9-16,20s7.18,20,16,20a13.63,13.63,0,0,0,8-2.71V192a8,8,0,0,1-8-8.53,8.17,8.17,0,0,1,8.25-7.47H208a8,8,0,0,1,8,8ZM80,152v37.41c0,14.22-11.18,26.26-25.41,26.58A26,26,0,0,1,28,190.37,8.17,8.17,0,0,1,35.31,182,8,8,0,0,1,44,190.22a8.89,8.89,0,0,0,4,8c7.85,4.82,16-.75,16-8.2V152.27A8.17,8.17,0,0,1,71.47,144,8,8,0,0,1,80,152Z" />
    </Svg>
  )
}

Icon.displayName = 'FileJpgFill'

export const FileJpgFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
