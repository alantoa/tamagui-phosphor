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
        d="M148.89,155.11A43.91,43.91,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.22c-13.9,18-23.41,44.16-24.31,81.65L8,175.87l56.07,16.06,16,56.07,24-56.07c37.51-.9,63.64-10.41,81.68-24.31A43.92,43.92,0,0,1,148.89,155.11Z"
        opacity="0.2"
      />
      <_Circle cx="156" cy="76" r="12" />
      <SvgPath
        d="M8,175.87l56.07,16.06,16,56.07,24-56.07C258.51,188.26,220,38.68,219,37c-1.73-1-151.25-39.46-155,114.9Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <SvgPath
        d="M185.82,167.62A44,44,0,0,1,136.2,119.8,44,44,0,0,1,88.38,70.21"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'FishDuotone'

export const FishDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
