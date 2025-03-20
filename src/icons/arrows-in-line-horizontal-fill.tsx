import type { IconProps } from "@tamagui/helpers-icon";
import { themed } from "@tamagui/helpers-icon";
import PropTypes from "prop-types";
import React, { memo } from "react";
import type { NamedExoticComponent } from "react";
import {
	Defs,
	Ellipse,
	G,
	Line,
	LinearGradient,
	Path,
	Polygon,
	Polyline,
	RadialGradient,
	Rect,
	Stop,
	Svg,
	Symbol,
	Use,
	Circle as _Circle,
	Text as _Text,
} from "react-native-svg";

const Icon = (props) => {
	const { color = "black", size = 24, ...otherProps } = props;
	return (
		<Svg viewBox="0 0 256 256" {...otherProps}>
			<Rect width="256" height="256" fill="none" />
			<Path d="M136,40V216a8,8,0,0,1-16,0V40a8,8,0,0,1,16,0ZM69.66,90.34A8,8,0,0,0,56,96v24H16a8,8,0,0,0,0,16H56v24a8,8,0,0,0,13.66,5.66l32-32a8,8,0,0,0,0-11.32ZM240,120H200V96a8,8,0,0,0-13.66-5.66l-32,32a8,8,0,0,0,0,11.32l32,32A8,8,0,0,0,200,160V136h40a8,8,0,0,0,0-16Z" />
		</Svg>
	);
};

Icon.displayName = "ArrowsInLineHorizontalFill";

export const ArrowsInLineHorizontalFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
