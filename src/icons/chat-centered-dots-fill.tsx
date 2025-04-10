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
      <Path d="M216,40H40A16,16,0,0,0,24,56V184a16,16,0,0,0,16,16h60.43l13.68,23.94a16,16,0,0,0,27.78,0L155.57,200H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM84,132a12,12,0,1,1,12-12A12,12,0,0,1,84,132Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,128,132Zm44,0a12,12,0,1,1,12-12A12,12,0,0,1,172,132Z" />
    </Svg>
  )
}

Icon.displayName = 'ChatCenteredDotsFill'

export const ChatCenteredDotsFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
