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
      <SvgPath
        d="M196,116v88.89a7.11,7.11,0,0,1-7.11,7.11H36a8,8,0,0,1-8-8V92a8,8,0,0,1,8-8H81.33a8,8,0,0,1,4.8,1.6L116,108h72A8,8,0,0,1,196,116Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
      <SvgPath
        d="M68,84V52a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L156,68h72a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H196"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'FoldersBold'

export const FoldersBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
