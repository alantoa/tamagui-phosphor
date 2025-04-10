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
      <Path d="M44,120H212a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120ZM152,44l44,44H152Zm4,164.53a8.18,8.18,0,0,1-8.25,7.47H120a8,8,0,0,1-8-8V152.27a8.18,8.18,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v48h20A8,8,0,0,1,156,208.53ZM94.51,156.65,77.83,180l16.68,23.35a8,8,0,0,1-13,9.3L68,193.76,54.51,212.65a8,8,0,1,1-13-9.3L58.17,180,41.49,156.65a8,8,0,0,1,2.3-11.46,8.19,8.19,0,0,1,10.88,2.38L68,166.24l13.49-18.89a8,8,0,0,1,13,9.3Zm121.28,39.66a20.81,20.81,0,0,1-9.18,15.23C201.42,215,194.94,216,189.12,216a60.63,60.63,0,0,1-15.19-2,8,8,0,0,1,4.31-15.41c4.38,1.21,14.94,2.71,19.54-.35.89-.6,1.84-1.52,2.15-3.93.34-2.67-.72-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.12a20.58,20.58,0,0,1,8.95-14.94c11.84-8,30.72-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.48-1.17-15.22-2.56-19.82.56a4.54,4.54,0,0,0-2,3.67c-.11.9-.13,1.08,1.12,1.9,2.31,1.49,6.45,2.68,10.45,3.84C201.48,174.17,218,179,215.79,196.31Z" />
    </Svg>
  )
}

Icon.displayName = 'FileXlsFill'

export const FileXlsFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
