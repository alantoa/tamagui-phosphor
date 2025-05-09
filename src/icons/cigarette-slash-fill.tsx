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
      <SvgPath d="M201,60.08c8-14.23,7.42-21.71,6.36-24.91a7.79,7.79,0,0,0-2.64-3.86,8,8,0,1,1,6.5-14.62,22.57,22.57,0,0,1,11.32,13.44c3.36,10.14.81,22.85-7.6,37.79-8,14.23-7.42,21.72-6.36,24.92a7.79,7.79,0,0,0,2.64,3.85,8,8,0,1,1-6.5,14.62,22.53,22.53,0,0,1-11.32-13.44C190.07,87.73,192.62,75,201,60.08Zm-47.6,37.79a22.53,22.53,0,0,0,11.32,13.44,8,8,0,1,0,6.5-14.62,7.79,7.79,0,0,1-2.64-3.85c-1.06-3.2-1.64-10.69,6.36-24.92,8.41-14.94,11-27.65,7.6-37.79a22.57,22.57,0,0,0-11.32-13.44,8,8,0,1,0-6.5,14.62,7.79,7.79,0,0,1,2.64,3.86c1.06,3.2,1.64,10.68-6.36,24.91C152.62,75,150.07,87.73,153.43,97.87Zm60.49,112.75a8,8,0,1,1-11.84,10.76L175.37,192H32a16,16,0,0,1-16-16V144a16,16,0,0,1,16-16h85.19L42.08,45.38A8,8,0,1,1,53.92,34.62ZM160.82,176l-29.09-32H96v32ZM224,128H178.52a8,8,0,1,0,0,16H224v32h-1.84a8,8,0,1,0,0,16H224a16,16,0,0,0,16-16V144A16,16,0,0,0,224,128Z" />
    </Svg>
  )
}

Icon.displayName = 'CigaretteSlashFill'

export const CigaretteSlashFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
