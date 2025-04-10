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
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="currentColor"
      {...otherProps}
    >
      <SvgRect width="256" height="256" fill="none" />
      <SvgPath d="M116,116h24v24H116ZM86,72a14,14,0,0,0,0,28h14V86A14,14,0,0,0,86,72Zm98,14a14,14,0,0,0-28,0v14h14A14,14,0,0,0,184,86ZM72,170a14,14,0,0,0,28,0V156H86A14,14,0,0,0,72,170ZM224,48V208a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32H208A16,16,0,0,1,224,48Zm-68,92V116h14a30,30,0,1,0-30-30v14H116V86a30,30,0,1,0-30,30h14v24H86a30,30,0,1,0,30,30V156h24v14a30,30,0,1,0,30-30Zm0,30a14,14,0,1,0,14-14H156Z" />
    </Svg>
  )
}

Icon.displayName = 'CommandFill'

export const CommandFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
