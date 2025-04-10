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
      <Path d="M32,104a8,8,0,0,1,8-8H56a8,8,0,0,1,0,16H40A8,8,0,0,1,32,104ZM71.43,58.75A8,8,0,0,0,82.75,47.43L71.43,36.12A8,8,0,0,0,60.12,47.43ZM128,40a8,8,0,0,0,8-8V16a8,8,0,0,0-16,0V32A8,8,0,0,0,128,40Zm50.91,21.09a8,8,0,0,0,5.66-2.34l11.31-11.32a8,8,0,0,0-11.31-11.31L173.25,47.43a8,8,0,0,0,5.66,13.66ZM192,104a8,8,0,0,0,8,8h16a8,8,0,0,0,0-16H200A8,8,0,0,0,192,104ZM88,112a8,8,0,0,0,8-8,32,32,0,0,1,64,0,8,8,0,0,0,16,0,48,48,0,0,0-96,0A8,8,0,0,0,88,112Zm55.2,24H112.8a4,4,0,0,0-3.91,3.15L102.62,168h50.76l-6.27-28.85A4,4,0,0,0,143.2,136ZM31.75,186,17,212.06a8,8,0,0,0,1.16,9.45,8.22,8.22,0,0,0,6,2.49H70.85a4,4,0,0,0,3.91-3.15l8-36.85H35.23A4,4,0,0,0,31.75,186Zm207.21,26-14.71-26a4,4,0,0,0-3.48-2H173.23l8,36.85a4,4,0,0,0,3.91,3.15h46.62a8.22,8.22,0,0,0,6-2.49A8,8,0,0,0,239,212.06Zm-28.27-50-12.42-22a8,8,0,0,0-7-4.06H167.76a4,4,0,0,0-3.91,4.85l5.9,27.15H207.2A4,4,0,0,0,210.69,162ZM88.24,136H64.7a8,8,0,0,0-7,4.06L45.31,162a4,4,0,0,0,3.49,6H86.25l5.9-27.15A4,4,0,0,0,88.24,136Zm68.62,48H99.14L91.5,219.15A4,4,0,0,0,95.41,224h65.18a4,4,0,0,0,3.91-4.85Z" />
    </Svg>
  )
}

Icon.displayName = 'SolarPanelFill'

export const SolarPanelFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
