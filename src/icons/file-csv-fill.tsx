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
      <Path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44ZM48,180c0,11,7.18,20,16,20a14.18,14.18,0,0,0,10.06-4.5,8.21,8.21,0,0,1,10.9-.91,8,8,0,0,1,.82,11.81A30.06,30.06,0,0,1,64,216c-17.64,0-32-16.15-32-36s14.36-36,32-36a30,30,0,0,1,21.39,9.19,8.26,8.26,0,0,1,.73,11.09,8,8,0,0,1-11.9.38A14.17,14.17,0,0,0,64,160C55.18,160,48,169,48,180Zm103.81,16.31a20.82,20.82,0,0,1-9.19,15.23C137.43,215,131,216,125.13,216A61.14,61.14,0,0,1,110,214a8,8,0,1,1,4.3-15.41c4.38,1.2,14.95,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.56,20.56,0,0,1,9-14.95c11.84-8,30.71-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.49-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.12.9-.14,1.09,1.11,1.9,2.31,1.49,6.45,2.68,10.45,3.84C137.49,174.17,154.05,179,151.81,196.31ZM215.42,155l-19.89,55.68a8,8,0,0,1-15.06,0L160.58,155a8.21,8.21,0,0,1,4.5-10.45,8,8,0,0,1,10.45,4.76L188,184.21l12.47-34.9a8,8,0,0,1,10.45-4.76A8.23,8.23,0,0,1,215.42,155Z" />
    </Svg>
  )
}

Icon.displayName = 'FileCsvFill'

export const FileCsvFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
