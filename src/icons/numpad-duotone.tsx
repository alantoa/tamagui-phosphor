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
      <SvgPath
        d="M64,48H192a0,0,0,0,1,0,0V200a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V48A0,0,0,0,1,64,48Z"
        opacity="0.2"
      />
      <_Circle cx="64" cy="48" r="16" />
      <_Circle cx="128" cy="48" r="16" />
      <_Circle cx="192" cy="48" r="16" />
      <_Circle cx="64" cy="104" r="16" />
      <_Circle cx="128" cy="104" r="16" />
      <_Circle cx="192" cy="104" r="16" />
      <_Circle cx="64" cy="160" r="16" />
      <_Circle cx="128" cy="160" r="16" />
      <_Circle cx="128" cy="216" r="16" />
      <_Circle cx="192" cy="160" r="16" />
    </Svg>
  )
}

Icon.displayName = 'NumpadDuotone'

export const NumpadDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
