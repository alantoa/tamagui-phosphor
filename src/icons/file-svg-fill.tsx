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
      <Path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H212a4,4,0,0,0,4-4V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44ZM87.82,196.31a20.82,20.82,0,0,1-9.19,15.23C73.44,215,67,216,61.14,216A61.23,61.23,0,0,1,46,214a8,8,0,0,1,4.3-15.41c4.38,1.2,14.95,2.7,19.55-.36.88-.59,1.83-1.52,2.14-3.93.35-2.67-.71-4.1-12.78-7.59-9.35-2.7-25-7.23-23-23.11a20.55,20.55,0,0,1,9-14.95c11.84-8,30.72-3.31,32.83-2.76a8,8,0,0,1-4.07,15.48c-4.48-1.17-15.23-2.56-19.83.56a4.54,4.54,0,0,0-2,3.67c-.11.9-.14,1.09,1.12,1.9,2.31,1.49,6.44,2.68,10.45,3.84C73.5,174.17,90.06,179,87.82,196.31Zm63.72-41.62-19.9,55.72a8.25,8.25,0,0,1-6.5,5.51,8,8,0,0,1-8.67-5.23L96.59,155a8.21,8.21,0,0,1,4.5-10.45,8,8,0,0,1,10.45,4.76L124,184.21l12.46-34.9a8,8,0,0,1,15.07,5.38ZM216,184v16.87a8,8,0,0,1-2.26,5.57A30,30,0,0,1,192,216c-17.64,0-32-16.15-32-36s14.36-36,32-36a29.36,29.36,0,0,1,16.09,4.86,8.22,8.22,0,0,1,3,10.64,8,8,0,0,1-11.54,2.88A13.27,13.27,0,0,0,192,160c-8.82,0-16,9-16,20s7.18,20,16,20a13.38,13.38,0,0,0,8-2.71V192a8,8,0,0,1-8-8.53,8.18,8.18,0,0,1,8.26-7.47H208A8,8,0,0,1,216,184Z" />
    </Svg>
  )
}

Icon.displayName = 'FileSvgFill'

export const FileSvgFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
