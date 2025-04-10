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
      <Path d="M48,180c0,11,7.18,20,16,20a14.07,14.07,0,0,0,10.07-4.51,8.19,8.19,0,0,1,10.88-.9,8,8,0,0,1,.83,11.81A30.06,30.06,0,0,1,64,216c-17.65,0-32-16.15-32-36s14.35-36,32-36a30,30,0,0,1,21.38,9.19,8.25,8.25,0,0,1,.74,11.09,8,8,0,0,1-11.9.38A14.24,14.24,0,0,0,64,160C55.18,160,48,169,48,180ZM216,88V223.75a8.15,8.15,0,0,1-6.81,8.16A8,8,0,0,1,200,224V124a4,4,0,0,0-4-4H44a4,4,0,0,1-4-4V40A16,16,0,0,1,56,24h96a8,8,0,0,1,5.66,2.34l56,56A8,8,0,0,1,216,88Zm-20,0L152,44V88Zm-28,80v16h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53h-8v7.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8v-8H136v7.73a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8v-8h-7.73a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h8V168h-7.73a8.17,8.17,0,0,1-8.25-7.47,8,8,0,0,1,8-8.53h8v-7.73a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v8h16v-7.73a8.17,8.17,0,0,1,7.47-8.25,8,8,0,0,1,8.53,8v8h7.73a8.17,8.17,0,0,1,8.25,7.47,8,8,0,0,1-8,8.53Zm-16,0H136v16h16Z" />
    </Svg>
  )
}

Icon.displayName = 'FileCSharpFill'

export const FileCSharpFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
