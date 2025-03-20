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
			<Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM187.35,135.26l-104,48a8,8,0,0,1-6.7-14.52L164.91,128,76.65,87.26a8,8,0,1,1,6.7-14.52l104,48a8,8,0,0,1,0,14.52Z" />
		</Svg>
	);
};

Icon.displayName = "GreaterThanFill";

export const GreaterThanFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
