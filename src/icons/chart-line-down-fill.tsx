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
			<Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM200,192H56a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0V92.69l32,32,34.34-34.35a8,8,0,0,1,11.32,0L176,124.69V104a8,8,0,0,1,16,0v40a8,8,0,0,1-8,8H144a8,8,0,0,1,0-16h20.69L136,107.31l-34.34,34.35a8,8,0,0,1-11.32,0L64,115.31V176H200a8,8,0,0,1,0,16Z" />
		</Svg>
	);
};

Icon.displayName = "ChartLineDownFill";

export const ChartLineDownFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
