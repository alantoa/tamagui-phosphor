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
      <Path d="M69.4,144.89a220.94,220.94,0,0,0-18.77,42.6,4,4,0,0,1-7,1.19,103.44,103.44,0,0,1-18.83-48.11,4,4,0,0,1,4.13-4.47A119,119,0,0,1,69.4,144.89ZM44,77.14a180.06,180.06,0,0,1,63,19.12,226.9,226.9,0,0,1,22.6-19.49,206.42,206.42,0,0,0-69.28-25.6,4,4,0,0,0-3.42,1A105.3,105.3,0,0,0,41.08,71,4,4,0,0,0,44,77.14ZM239.58,221.35A7.91,7.91,0,0,0,232,216H183.36A104.25,104.25,0,0,0,230.25,147a4,4,0,0,0-5.27-4.52A120.6,120.6,0,0,0,150.88,216H134a136.55,136.55,0,0,1,94.78-91.37,4,4,0,0,0,2.92-4.15,102.59,102.59,0,0,0-3.58-20.56,4,4,0,0,0-4.89-2.8A164.53,164.53,0,0,0,103,225a4,4,0,0,0,3.08,4.69A103.9,103.9,0,0,0,128,232h0l104,0A8,8,0,0,0,239.58,221.35Zm-211-101.27a134.51,134.51,0,0,1,49.39,11A224.44,224.44,0,0,1,95.52,108.4,164.28,164.28,0,0,0,33.36,92.28a4,4,0,0,0-4,2.75,103,103,0,0,0-4.63,20.61A4,4,0,0,0,28.57,120.08ZM85.84,40.66A222.81,222.81,0,0,1,144,66.8a221.3,221.3,0,0,1,38.8-19.67,4,4,0,0,0,.7-7.08,103.86,103.86,0,0,0-98.2-6.85A4,4,0,0,0,85.84,40.66ZM216,82.51a4,4,0,0,0,2.4-5.87,105,105,0,0,0-12.82-17.81,4,4,0,0,0-4.21-1.19A208.81,208.81,0,0,0,62.21,205.51a4,4,0,0,0,1.44,4.13A104.25,104.25,0,0,0,82.2,221.36a4,4,0,0,0,5.71-2.75A180.61,180.61,0,0,1,216,82.51Z" />
    </Svg>
  )
}

Icon.displayName = 'YarnFill'

export const YarnFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
