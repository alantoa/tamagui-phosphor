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
      <Path d="M168,16H120A56,56,0,0,0,64,72v31.73A8.17,8.17,0,0,1,56.53,112,8,8,0,0,1,48,104V78.7a4,4,0,0,0-5.63-3.65A32,32,0,0,0,24,104v29.19a16.14,16.14,0,0,0,3.5,10q.3.36.63.69L64,179.34V216a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V177.12l15.38-53.84a16,16,0,0,0,.62-4.4V72A56,56,0,0,0,168,16Zm3.58,168.84a8,8,0,0,1-7.16,14.32L136,184.94l-28.42,14.22a8,8,0,1,1-7.16-14.32L118.11,176l-17.69-8.84a8,8,0,1,1,7.16-14.32L136,167.06l28.42-14.22a8,8,0,1,1,7.16,14.32L153.89,176Z" />
    </Svg>
  )
}

Icon.displayName = 'BoxingGloveFill'

export const BoxingGloveFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
