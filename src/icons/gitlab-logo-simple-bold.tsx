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
        d="M175.35,96,195,42.62a3.93,3.93,0,0,1,7.53.38l19.89,76.12a49,49,0,0,1-18.87,52.4l-73.26,51.76a3.91,3.91,0,0,1-4.52,0L52.48,171.52a49,49,0,0,1-18.87-52.4L53.5,43A3.93,3.93,0,0,1,61,42.62L80.65,96Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'GitlabLogoSimpleBold'

export const GitlabLogoSimpleBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
