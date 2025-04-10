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
      <Path d="M224,48V187.57a4,4,0,0,1-7,2.7L116.8,80H208V48H184v8a8,8,0,0,1-8.52,8A8.18,8.18,0,0,1,168,55.73V48H87.71l-8.46-9.31a4,4,0,0,1,3-6.69H168V24a8,8,0,0,1,8.52-8A8.18,8.18,0,0,1,184,24.27V32h24A16,16,0,0,1,224,48ZM213.92,210.62A8,8,0,0,1,208,224H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32a8,8,0,0,1,5.93,2.62ZM73.55,80,48,51.89V80Z" />
    </Svg>
  )
}

Icon.displayName = 'CalendarSlashFill'

export const CalendarSlashFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
