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
      width="{size}"
      height="{size}"
      fill="currentColor"
      otherProps="{...otherProps}"
    >
      <Rect width="256" height="256" fill="none" />
      <Path d="M53.92,34.62a8,8,0,0,0-11.48-.37,8.23,8.23,0,0,0-.14,11.38L44.46,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H189.92l12.16,13.38a8,8,0,0,0,11.33.51,8.31,8.31,0,0,0,.3-11.51ZM104,128h13.19l14.54,16H104.27A8.18,8.18,0,0,1,96,136.53,8,8,0,0,1,104,128Zm-48,0H72a8,8,0,0,1,8,8.53A8.18,8.18,0,0,1,71.73,144H56.27A8.18,8.18,0,0,1,48,136.53,8,8,0,0,1,56,128Zm96,48H56.27A8.18,8.18,0,0,1,48,168.53,8,8,0,0,1,56,160h90.28l11.9,13.09A8,8,0,0,1,152,176ZM240,64V192a16,16,0,0,1-5.19,11.78,4,4,0,0,1-5.7-.24L175,144h25a8,8,0,0,0,8-8.53,8.17,8.17,0,0,0-8.25-7.47h-39.3L93.79,54.69a4,4,0,0,1,3-6.69H224A16,16,0,0,1,240,64Z" />
    </Svg>
  )
}

Icon.displayName = 'SubtitlesSlashFill'

export const SubtitlesSlashFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
