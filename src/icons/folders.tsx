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
      <Path
        d="M200,112v88.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33a8,8,0,0,1,4.8,1.6L120,104h72A8,8,0,0,1,200,112Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        d="M200,112v88.89a7.11,7.11,0,0,1-7.11,7.11H40a8,8,0,0,1-8-8V88a8,8,0,0,1,8-8H85.33a8,8,0,0,1,4.8,1.6L120,104h72A8,8,0,0,1,200,112Z"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
      <Path
        d="M64,80V56a8,8,0,0,1,8-8h45.33a8,8,0,0,1,4.8,1.6L152,72h72a8,8,0,0,1,8,8v88.89a7.11,7.11,0,0,1-7.11,7.11H200"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="16"
      />
    </Svg>
  )
}

Icon.displayName = 'Folders'

export const Folders: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
