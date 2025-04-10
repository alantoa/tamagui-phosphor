import React, { memo } from 'react'
import PropTypes from 'prop-types'
import type { NamedExoticComponent } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import {
  Svg,
  Circle as _Circle,
  Ellipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path,
  Polygon,
  Polyline,
  Rect,
  Symbol,
  Text as _Text,
  Use,
  Defs,
  Stop,
} from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 256 256" {...otherProps}>
      <Rect width="256" height="256" fill="none" />
      <Path d="M192,128a32,32,0,0,1-32,32h-8V96h8A32,32,0,0,1,192,128Zm40-72V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM120,148c0-19.88-19.92-25.35-34.47-29.34-12.06-3.31-20-5.84-20-10.66,0-6.73,8.1-12,18.44-12,8,0,14.85,3.13,17.42,8a8,8,0,1,0,14.13-7.51C110.16,86.31,98.07,80,84,80c-19.64,0-34.44,12-34.44,28,0,17.38,17.6,22.21,31.74,26.09,16,4.39,22.7,7.3,22.7,13.91,0,5.68-8.21,12-20,12s-20-6.32-20-12a8,8,0,0,0-16,0c0,15.7,15.81,28,36,28S120,163.7,120,148Zm88-20a48.05,48.05,0,0,0-48-48H144a8,8,0,0,0-8,8v80a8,8,0,0,0,8,8h16A48.05,48.05,0,0,0,208,128Z" />
    </Svg>
  )
}

Icon.displayName = 'StandardDefinitionFill'

export const StandardDefinitionFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
