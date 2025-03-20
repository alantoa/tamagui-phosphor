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
    <Svg viewBox="0 0 256 256" {...otherProps}>
      <SvgRect width="256" height="256" fill="none" />
      <SvgPath d="M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152ZM48,180c0,11,7.18,20,16,20a14.07,14.07,0,0,0,10.07-4.51,8.19,8.19,0,0,1,10.88-.9,8,8,0,0,1,.83,11.81A30.06,30.06,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30,30,0,0,1,21.39,9.2,8.24,8.24,0,0,1,.73,11.08,8,8,0,0,1-11.9.38A14.18,14.18,0,0,0,64,160C55.18,160,48,169,48,180Zm108,.53a8.18,8.18,0,0,1-8.25,7.47H136v11.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V188H108.27a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h12V160.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v12h12A8,8,0,0,1,156,180.53Zm68,0a8.18,8.18,0,0,1-8.25,7.47H204v11.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V188H176.27a8.18,8.18,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h12V160.27a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v12h12A8,8,0,0,1,224,180.53Z" />
    </Svg>
  )
}

Icon.displayName = 'FileCppFill'

export const FileCppFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
