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
			<Path d="M144,180a16,16,0,1,1-16-16A16,16,0,0,1,144,180Zm72-76v48a88,88,0,0,1-176,0V64a16,16,0,0,1,32,0v56a8,8,0,0,0,16,0V32a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V48a16,16,0,0,1,32,0v80a8,8,0,0,0,16,0V104a16,16,0,0,1,32,0Zm-36.42,74.21c-.7-1.4-17.5-34.21-51.58-34.21s-50.88,32.81-51.58,34.21a4,4,0,0,0,0,3.58c.7,1.4,17.5,34.21,51.58,34.21s50.88-32.81,51.58-34.21A4,4,0,0,0,179.58,178.21Z" />
		</Svg>
	);
};

Icon.displayName = "HandEyeFill";

export const HandEyeFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
