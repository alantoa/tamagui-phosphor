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
      <Path
        d="M108.67,168A40,40,0,0,1,72,192H64a48,48,0,0,1-48-48V120A48,48,0,0,1,64,72h9.43a48,48,0,0,1,43.5,27.7l30.14,64.6a48,48,0,0,0,43.5,27.7H208a32,32,0,0,0,32-32h0a32,32,0,0,0-32-32H188a28,28,0,0,1-28-28h0a28,28,0,0,1,28-28h20a24,24,0,0,1,24,24h0"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="24"
      />
    </Svg>
  )
}

Icon.displayName = 'LastfmLogoBold'

export const LastfmLogoBold: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
