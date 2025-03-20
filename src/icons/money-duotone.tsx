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
      <_Circle cx="128" cy="128" r="32" opacity="0.2" />
      <SvgPath d="M240,64H200a48.85,48.85,0,0,0,40,40Z" opacity="0.2" />
      <SvgPath d="M240,192V152a48.85,48.85,0,0,0-40,40Z" opacity="0.2" />
      <SvgPath d="M16,192V152a48.85,48.85,0,0,1,40,40Z" opacity="0.2" />
      <SvgPath d="M16,64v40A48.85,48.85,0,0,0,56,64Z" opacity="0.2" />
      <_Circle
        cx="128"
        cy="128"
        r="32"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgRect
        x="16"
        y="64"
        width="224"
        height="128"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M240,104a48.85,48.85,0,0,1-40-40"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M200,192a48.85,48.85,0,0,1,40-40"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M16,152a48.85,48.85,0,0,1,40,40"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M56,64a48.85,48.85,0,0,1-40,40"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'MoneyDuotone'

export const MoneyDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
