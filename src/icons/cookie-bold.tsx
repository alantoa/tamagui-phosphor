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
      <_Circle cx="156" cy="172" r="16" />
      <_Circle cx="92" cy="164" r="16" />
      <_Circle cx="84" cy="108" r="16" />
      <_Circle cx="132" cy="124" r="16" />
      <Path
        d="M224,128a48,48,0,0,1-48-48,48,48,0,0,1-48-48,96,96,0,1,0,96,96Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'CookieBold'

export const CookieBold: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
