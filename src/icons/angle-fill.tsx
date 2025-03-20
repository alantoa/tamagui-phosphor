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
			<Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM112,88a64.07,64.07,0,0,1,64,64,8,8,0,0,1-16,0,48.05,48.05,0,0,0-48-48,8,8,0,0,1,0-16Zm88,104H80a8,8,0,0,1-8-8V104H56a8,8,0,0,1,0-16H72V72a8,8,0,0,1,16,0V176H200a8,8,0,0,1,0,16Z" />
		</Svg>
	);
};

Icon.displayName = "AngleFill";

export const AngleFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
