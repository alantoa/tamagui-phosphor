import React, { memo } from 'react'
import PropTypes from 'prop-types'
import type { NamedExoticComponent } from 'react'
import type { IconProps } from '@tamagui/helpers-icon'
import {
  Svg,
  Circle as _Circle,
  Ellipse as SvgEllipse,
  G,
  LinearGradient,
  RadialGradient,
  Line,
  Path as SvgPath,
  Polygon as SvgPolygon,
  Polyline as SvgPolyline,
  Rect as SvgRect,
  Symbol as SvgSymbol,
  Text as _Text,
  Use,
  Defs,
  Stop as SvgStop,
} from 'react-native-svg'
import { themed } from '@tamagui/helpers-icon'

const Icon = (props) => {
  const { color = 'black', size = 24, ...otherProps } = props
  return (
    <Svg viewBox="0 0 256 256" {...otherProps}>
      <SvgRect width="256" height="256" fill="none" />
      <SvgPath d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM128,72h48a8,8,0,0,1,8,8V96a8,8,0,0,1-16,0V88H128a8,8,0,0,1,0-16Zm61.27,126a8,8,0,0,1-11.29-.75l-42-48V176h12a8,8,0,0,1,0,16H108a8,8,0,0,1,0-16h12V131L88,94.43V96a8,8,0,0,1-16,0V80a8.13,8.13,0,0,1,.63-3.13L66,69.27A8,8,0,0,1,78,58.73l112,128A8,8,0,0,1,189.27,198Z" />
    </Svg>
  )
}

Icon.displayName = 'TextTSlashFill'

export const TextTSlashFill: NamedExoticComponent<IconProps> = memo<IconProps>(
  themed(Icon)
)
