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
			<Path d="M54.42,54.43a104,104,0,1,0,147.15,0A104.17,104.17,0,0,0,54.42,54.43Zm99.93,83.92a8,8,0,1,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,164.71Zm0-56a8,8,0,1,1,11.32,11.32l-32,32a8,8,0,0,1-11.32,0l-32-32a8,8,0,1,1,11.32-11.32L128,108.68Z" />
		</Svg>
	);
};

Icon.displayName = "CaretCircleDoubleDownFill";

export const CaretCircleDoubleDownFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
