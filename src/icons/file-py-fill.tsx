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
      <SvgPath d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40v76a4,4,0,0,0,4,4H172a4,4,0,0,1,4,4V228a4,4,0,0,0,4,4h20a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM152,88V44l44,44ZM64,144H48a8,8,0,0,0-8,8v55.73A8.17,8.17,0,0,0,47.47,216,8,8,0,0,0,56,208v-8h7.4c15.24,0,28.14-11.92,28.59-27.15A28,28,0,0,0,64,144Zm-.35,40H56V160h8a12,12,0,0,1,12,13.16A12.25,12.25,0,0,1,63.65,184Zm91-27.48L136,186.29v21.44a8.17,8.17,0,0,1-7.47,8.25,8,8,0,0,1-8.53-8V186.29l-18.61-29.77a8.22,8.22,0,0,1,2.16-11.17,8,8,0,0,1,11.23,2.41L128,168.91l13.22-21.15a8,8,0,0,1,11.23-2.41A8.22,8.22,0,0,1,154.61,156.52Z" />
    </Svg>
  )
}

Icon.displayName = 'FilePyFill'

export const FilePyFill: NamedExoticComponent<IconProps> = memo<IconProps>(themed(Icon))
