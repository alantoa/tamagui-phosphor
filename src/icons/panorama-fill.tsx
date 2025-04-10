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
      <Path d="M241.75,51.32a15.87,15.87,0,0,0-13.86-2.77l-3.48.94C205.61,54.56,170.61,64,128,64S50.39,54.56,31.59,49.49l-3.48-.94A16,16,0,0,0,8,64V192a16,16,0,0,0,16,16,16.22,16.22,0,0,0,4.18-.55l3.18-.86C50.13,201.49,85.17,192,128,192s77.87,9.49,96.69,14.59l3.18.86A16,16,0,0,0,248,192V64A15.9,15.9,0,0,0,241.75,51.32ZM204,96a12,12,0,1,1-12,12A12,12,0,0,1,204,96Zm-76,80c-45,0-82.72,10.23-100.87,15.14L24,192v-39.3l46.34-46.35a8,8,0,0,1,11.32,0L152.28,177C144.49,176.35,136.37,176,128,176Zm100.87,15.14a448.7,448.7,0,0,0-51-11.2l-35.26-35.26L157,130.34a8,8,0,0,1,11.31,0l60.89,60.88Z" />
    </Svg>
  )
}

Icon.displayName = 'PanoramaFill'

export const PanoramaFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
