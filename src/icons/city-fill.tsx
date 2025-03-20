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
			<Path d="M240,208h-8V88a8,8,0,0,0-8-8H160a8,8,0,0,0-8,8v40H104V40a8,8,0,0,0-8-8H32a8,8,0,0,0-8,8V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM72,184a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V72a8,8,0,0,1,16,0Zm64,96a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm64,0a8,8,0,0,1-16,0V168a8,8,0,0,1,16,0Zm0-48a8,8,0,0,1-16,0V120a8,8,0,0,1,16,0Z" />
		</Svg>
	);
};

Icon.displayName = "CityFill";

export const CityFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
