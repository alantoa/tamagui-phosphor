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
      <SvgPath d="M101.85,191.14C97.34,201,82.29,224,40,224a8,8,0,0,1-8-8c0-42.29,23-57.34,32.86-61.85a8,8,0,0,1,6.64,14.56c-6.43,2.93-20.62,12.36-23.12,38.91,26.55-2.5,36-16.69,38.91-23.12a8,8,0,1,1,14.56,6.64Zm122-144a16,16,0,0,0-15-15c-12.58-.75-44.73.4-71.4,27.07h0L88,108.7A8,8,0,0,1,76.67,97.39l26.56-26.57A4,4,0,0,0,100.41,64H74.35A15.9,15.9,0,0,0,63,68.68L28.7,103a16,16,0,0,0,9.07,27.16l38.47,5.37,44.21,44.21,5.37,38.49a15.94,15.94,0,0,0,10.78,12.92,16.11,16.11,0,0,0,5.1.83A15.91,15.91,0,0,0,153,227.3L187.32,193A16,16,0,0,0,192,181.65V155.59a4,4,0,0,0-6.83-2.82l-26.57,26.56a8,8,0,0,1-11.71-.42,8.2,8.2,0,0,1,.6-11.1l49.27-49.27h0C223.45,91.86,224.6,59.71,223.85,47.12Z" />
    </Svg>
  )
}

Icon.displayName = 'RocketLaunchFill'

export const RocketLaunchFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
