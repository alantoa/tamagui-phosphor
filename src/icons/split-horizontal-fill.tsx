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
			<Path d="M112,48V208a8,8,0,0,1-16,0V136H64v24a8,8,0,0,1-13.66,5.66l-32-32a8,8,0,0,1,0-11.32l32-32A8,8,0,0,1,64,96v24H96V48a8,8,0,0,1,16,0Zm125.66,74.34-32-32A8,8,0,0,0,192,96v24H160V48a8,8,0,0,0-16,0V208a8,8,0,0,0,16,0V136h32v24a8,8,0,0,0,13.66,5.66l32-32A8,8,0,0,0,237.66,122.34Z" />
		</Svg>
	);
};

Icon.displayName = "SplitHorizontalFill";

export const SplitHorizontalFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
