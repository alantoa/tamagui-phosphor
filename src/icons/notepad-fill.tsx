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
      <Path d="M208,32H184V24a8,8,0,0,0-16,0v8H136V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48a8,8,0,0,0-8,8V200a32,32,0,0,0,32,32H184a32,32,0,0,0,32-32V40A8,8,0,0,0,208,32ZM120,56a8,8,0,0,1,16,0v8a8,8,0,0,1-16,0ZM80,72a8,8,0,0,1-8-8V56a8,8,0,0,1,16,0v8A8,8,0,0,1,80,72Zm80,96H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm24-72a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0Z" />
    </Svg>
  )
}

Icon.displayName = 'NotepadFill'

export const NotepadFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
