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
      <SvgPath d="M136,120v96a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm64,72a8,8,0,0,0-8,8v16a8,8,0,0,0,16,0V200A8,8,0,0,0,200,192Zm24-48H208V40a8,8,0,0,0-16,0V144H176a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V152A8,8,0,0,0,224,144ZM56,160a8,8,0,0,0-8,8v48a8,8,0,0,0,16,0V168A8,8,0,0,0,56,160Zm24-48H64V40a8,8,0,0,0-16,0v72H32a8,8,0,0,0-8,8v16a8,8,0,0,0,8,8H80a8,8,0,0,0,8-8V120A8,8,0,0,0,80,112Zm72-48H136V40a8,8,0,0,0-16,0V64H104a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8h48a8,8,0,0,0,8-8V72A8,8,0,0,0,152,64Z" />
    </Svg>
  )
}

Icon.displayName = 'FadersFill'

export const FadersFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
