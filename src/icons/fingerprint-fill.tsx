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
      <SvgPath d="M126.42,24C70.73,24.85,25.21,70.09,24,125.81a103.53,103.53,0,0,0,13.52,53.54,4,4,0,0,0,7.1-.3,119.35,119.35,0,0,0,11.37-51A71.77,71.77,0,0,1,83,71.83a8,8,0,1,1,9.86,12.61A55.82,55.82,0,0,0,72,128.07a135.28,135.28,0,0,1-18.45,68.35,4,4,0,0,0,.61,4.85c2,2,4.09,4,6.25,5.82a4,4,0,0,0,6-1A151.18,151.18,0,0,0,85,158.49a8,8,0,1,1,15.68,3.19,167.33,167.33,0,0,1-21.07,53.64,4,4,0,0,0,1.6,5.63c2.47,1.25,5,2.41,7.57,3.47a4,4,0,0,0,5-1.61A183,183,0,0,0,120,128.28a8.16,8.16,0,0,1,7.44-8.21,8,8,0,0,1,8.56,8,198.94,198.94,0,0,1-25.21,97.16,4,4,0,0,0,2.95,5.92q4.55.63,9.21.86a4,4,0,0,0,3.67-2.1A214.88,214.88,0,0,0,152,128.8c.05-13.25-10.3-24.49-23.54-24.74A24,24,0,0,0,104,128a8.1,8.1,0,0,1-7.29,8,8,8,0,0,1-8.71-8,40,40,0,0,1,40.42-40c22,.23,39.68,19.17,39.57,41.16a231.37,231.37,0,0,1-20.52,94.57,4,4,0,0,0,4.62,5.51,103.49,103.49,0,0,0,10.26-3,4,4,0,0,0,2.35-2.22,243.76,243.76,0,0,0,11.48-34,8,8,0,1,1,15.5,4q-1.12,4.37-2.4,8.7a4,4,0,0,0,6.46,4.17A104,104,0,0,0,126.42,24ZM198,161.08a8,8,0,0,1-7.92,7,8.39,8.39,0,0,1-1-.06,8,8,0,0,1-6.95-8.93,252.57,252.57,0,0,0,1.92-31,56.08,56.08,0,0,0-56-56,56.78,56.78,0,0,0-7,.43,8,8,0,0,1-2-15.89,72.1,72.1,0,0,1,81,71.49A266.93,266.93,0,0,1,198,161.08Z" />
    </Svg>
  )
}

Icon.displayName = 'FingerprintFill'

export const FingerprintFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
