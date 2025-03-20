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
      <SvgPath d="M213.93,213.94l-17.65,4.73-10.42-38.89a40.06,40.06,0,0,0,20.77-46.14c-12.6-47-38.78-88.22-39.89-89.95a8,8,0,0,0-8.68-3.45L136.2,45.71c0-8.25-.18-13.43-.21-14.08a8,8,0,0,0-6.05-7.39l-32-8a8,8,0,0,0-8.68,3.45c-1.11,1.73-27.29,42.93-39.89,90a40.06,40.06,0,0,0,20.77,46.14L59.72,194.67l-17.65-4.73a8,8,0,0,0-4.14,15.46l48,12.86a8.23,8.23,0,0,0,2.07.27,8,8,0,0,0,2.07-15.73l-14.9-4,10.42-38.89c.81.05,1.61.08,2.41.08a40.12,40.12,0,0,0,37-24.88c1.18,6.37,2.6,12.82,4.31,19.22A40.08,40.08,0,0,0,168,184c.8,0,1.6,0,2.41-.08l10.42,38.89-14.9,4A8,8,0,0,0,168,242.53a8.23,8.23,0,0,0,2.07-.27l48-12.86a8,8,0,0,0-4.14-15.46ZM156.22,57.19c2.78,4.7,7.23,12.54,12.2,22.46L136,87.77c-.42-10-.38-18.25-.25-23.79,0-.56.05-1.12.08-1.68Zm-56.44-24,20.37,5.09c.06,4.28,0,10.67-.21,18.47-.06,1.21-.16,3.19-.23,5.84,0,1-.1,2-.16,3L86.69,57.43C92,46.67,96.84,38.16,99.78,33.19Zm85.06,10.39a8,8,0,0,1,3.58-10.74l16-8a8,8,0,1,1,7.16,14.32l-16,8a8,8,0,0,1-10.74-3.58ZM232,72a8,8,0,0,1-8,8H208a8,8,0,0,1,0-16h16A8,8,0,0,1,232,72ZM32.84,20.42a8,8,0,0,1,10.74-3.58l16,8a8,8,0,0,1-7.16,14.32l-16-8A8,8,0,0,1,32.84,20.42ZM40,72H24a8,8,0,0,1,0-16H40a8,8,0,0,1,0,16Z" />
    </Svg>
  )
}

Icon.displayName = 'CheersFill'

export const CheersFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
