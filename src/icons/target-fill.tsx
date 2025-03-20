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
			<Path d="M211.2,79.39a8,8,0,0,0-3.77,10.67A88.09,88.09,0,1,1,184.3,60.39L161.53,83.16A56,56,0,0,0,88.4,167.59h0a56,56,0,0,0,95.5-42.79,8,8,0,1,0-16,.9,40,40,0,0,1-62,35.67l23.95-23.95L167.6,99.72h0l62.06-62a8,8,0,0,0-11.32-11.32L195.67,49A104,104,0,0,0,54.46,201.54,104,104,0,0,0,221.87,83.16,8,8,0,0,0,211.2,79.39Z" />
		</Svg>
	);
};

Icon.displayName = "TargetFill";

export const TargetFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
