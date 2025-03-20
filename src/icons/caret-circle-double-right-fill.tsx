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
			<Path d="M201.57,54.42a104,104,0,1,0,0,147.15A104.17,104.17,0,0,0,201.57,54.42Zm-75.91,79.24-32,32a8,8,0,1,1-11.32-11.32L108.68,128,82.32,101.64A8,8,0,1,1,93.64,90.32l32,32A8,8,0,0,1,125.66,133.66Zm56,0-32,32a8,8,0,0,1-11.32-11.32L164.71,128l-26.36-26.36a8,8,0,1,1,11.32-11.32l32,32A8,8,0,0,1,181.68,133.66Z" />
		</Svg>
	);
};

Icon.displayName = "CaretCircleDoubleRightFill";

export const CaretCircleDoubleRightFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
