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
			<Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM88,155.84c.29,14.26.41,20.16,16,20.16a8,8,0,0,1,0,16c-31.27,0-31.72-22.43-32-35.84C71.71,141.9,71.59,136,56,136a8,8,0,0,1,0-16c15.59,0,15.71-5.9,16-20.16C72.28,86.43,72.73,64,104,64a8,8,0,0,1,0,16c-15.59,0-15.71,5.9-16,20.16-.17,8.31-.41,20.09-8,27.84C87.59,135.75,87.83,147.53,88,155.84ZM200,136c-15.59,0-15.71,5.9-16,20.16-.28,13.41-.73,35.84-32,35.84a8,8,0,0,1,0-16c15.59,0,15.71-5.9,16-20.16.17-8.31.41-20.09,8-27.84-7.6-7.75-7.84-19.53-8-27.84C167.71,85.9,167.59,80,152,80a8,8,0,0,1,0-16c31.27,0,31.72,22.43,32,35.84.29,14.26.41,20.16,16,20.16a8,8,0,0,1,0,16Z" />
		</Svg>
	);
};

Icon.displayName = "BracketsCurlyFill";

export const BracketsCurlyFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
