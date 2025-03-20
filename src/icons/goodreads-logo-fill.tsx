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
			<Path d="M200,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V40A16,16,0,0,0,200,24ZM176,160a48,48,0,0,1-86.4,28.8,8,8,0,1,1,12.8-9.6A32,32,0,0,0,160,160V147.74A48,48,0,0,1,80,112v-8a48,48,0,0,1,80-35.74V64a8,8,0,0,1,16,0Zm-16-56v8a32,32,0,0,1-64,0v-8a32,32,0,0,1,64,0Z" />
		</Svg>
	);
};

Icon.displayName = "GoodreadsLogoFill";

export const GoodreadsLogoFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
