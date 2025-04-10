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
      <_Circle cx="60" cy="60" r="16" />
      <_Circle cx="128" cy="60" r="16" />
      <_Circle cx="196" cy="60" r="16" />
      <_Circle cx="60" cy="128" r="16" />
      <_Circle cx="128" cy="128" r="16" />
      <_Circle cx="196" cy="128" r="16" />
      <_Circle cx="60" cy="196" r="16" />
      <_Circle cx="128" cy="196" r="16" />
      <_Circle cx="196" cy="196" r="16" />
    </Svg>
  )
}

Icon.displayName = 'DotsNineBold'

export const DotsNineBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
