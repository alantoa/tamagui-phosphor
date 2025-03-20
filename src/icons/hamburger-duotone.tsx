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
        d="M68,160l40,16,40-16,40,16,20-7.27V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V167.27Z"
        opacity="0.2"
      />
      <SvgPath
        d="M48.07,96a8,8,0,0,1-7.89-9.72C46.68,55.55,83.52,32,128,32s81.32,23.55,87.82,54.28A8,8,0,0,1,207.93,96Z"
        opacity="0.2"
      />
      <SvgPath
        d="M48.07,96a8,8,0,0,1-7.89-9.72C46.68,55.55,83.52,32,128,32s81.32,23.55,87.82,54.28A8,8,0,0,1,207.93,96Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPolyline
        points="24 176 68 160 108 176 148 160 188 176 232 160"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Line
        x1="24"
        y1="128"
        x2="232"
        y2="128"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M208,168.73V184a32,32,0,0,1-32,32H80a32,32,0,0,1-32-32V167.27"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'HamburgerDuotone'

export const HamburgerDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
