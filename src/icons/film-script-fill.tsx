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
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="currentColor"
      {...otherProps}
    >
      <Rect width="256" height="256" fill="none" />
      <Path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM76,188a12,12,0,1,1,12-12A12,12,0,0,1,76,188Zm0-48a12,12,0,1,1,12-12A12,12,0,0,1,76,140Zm0-48A12,12,0,1,1,88,80,12,12,0,0,1,76,92Z" />
    </Svg>
  )
}

Icon.displayName = 'FilmScriptFill'

export const FilmScriptFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
