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
      <Path d="M230,26.05C202-1.88,151.53,3.16,117.4,37.3c-31.79,31.79-38.33,77.77-16.51,106.49L71.33,173.35l-.68-.68a16,16,0,0,0-22.64,0L20.69,200a16,16,0,0,0,0,22.64l12.69,12.69a16,16,0,0,0,22.63,0h0L83.34,208a16,16,0,0,0,0-22.63l-.69-.69,29.56-29.56c11.29,8.58,25.24,12.79,40,12.79,22.72,0,47.25-10,66.54-29.3C252.83,104.47,257.88,54,230,26.05ZM224.23,104H200.06v-32h32A72.45,72.45,0,0,1,224.23,104ZM136,149.61A44.15,44.15,0,0,1,106.39,120H136ZM104,104a72.24,72.24,0,0,1,7.86-32H136v32Zm48-32h32v32h-32Zm77.67-16H200.06V26.28a44.23,44.23,0,0,1,29.66,29.66Zm-45.82-32h.16v32h-32V31.76A72.47,72.47,0,0,1,183.9,23.9ZM136,42.06V55.94H122.16a89.72,89.72,0,0,1,6.56-7.32A93.17,93.17,0,0,1,136,42.06Zm16,109.92V120h32v24.16A72.24,72.24,0,0,1,152.05,152Zm48-18.14V120H214a91.62,91.62,0,0,1-6.56,7.32A89.64,89.64,0,0,1,200.06,133.84Z" />
    </Svg>
  )
}

Icon.displayName = 'RacquetFill'

export const RacquetFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
