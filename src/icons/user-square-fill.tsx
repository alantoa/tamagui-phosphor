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
      <Path d="M172,120a44,44,0,1,1-44-44A44,44,0,0,1,172,120Zm52-72V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48ZM208,208V48H48V208h3.67a80.58,80.58,0,0,1,26.07-38.25q3.08-2.48,6.36-4.62a4,4,0,0,1,4.81.33,59.82,59.82,0,0,0,78.18,0,4,4,0,0,1,4.81-.33q3.28,2.15,6.36,4.62A80.58,80.58,0,0,1,204.33,208H208Z" />
    </Svg>
  )
}

Icon.displayName = 'UserSquareFill'

export const UserSquareFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
