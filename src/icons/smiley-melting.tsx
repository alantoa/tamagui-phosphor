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
      <_Circle cx="164" cy="140" r="12" />
      <_Circle cx="116" cy="92" r="12" />
      <SvgPath
        d="M56.44,192A95.67,95.67,0,0,1,32,126.06C33,74.58,75.15,32.73,126.63,32a96,96,0,0,1,72.93,160"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M96,240a16,16,0,0,1,0-32h56a16,16,0,0,0,0-32H136c-26.51,0-56-21.49-56-48a49,49,0,0,1,.66-8"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'SmileyMelting'

export const SmileyMelting: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
