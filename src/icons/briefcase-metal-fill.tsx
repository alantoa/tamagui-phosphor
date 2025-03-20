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
			<Path d="M28,112H228a4,4,0,0,1,4,4v40a4,4,0,0,1-4,4H28a4,4,0,0,1-4-4V116A4,4,0,0,1,28,112Zm-4,88a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V180a4,4,0,0,0-4-4H28a4,4,0,0,0-4,4ZM232,72V92a4,4,0,0,1-4,4H28a4,4,0,0,1-4-4V72A16,16,0,0,1,40,56H80V48a24,24,0,0,1,24-24h48a24,24,0,0,1,24,24v8h40A16,16,0,0,1,232,72ZM160,48a8,8,0,0,0-8-8H104a8,8,0,0,0-8,8v8h64Z" />
		</Svg>
	);
};

Icon.displayName = "BriefcaseMetalFill";

export const BriefcaseMetalFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
