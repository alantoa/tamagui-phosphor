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
			<Path d="M152,120v48a8,8,0,0,0,8,8h32a8,8,0,0,1,8,8v48a8,8,0,0,1-8,8H152a64.07,64.07,0,0,1-64-64V120H64a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8,40,40,0,0,0,40-40,8,8,0,0,1,8-8h32a8,8,0,0,1,8,8V64h40a8,8,0,0,1,8,8v40a8,8,0,0,1-8,8Z" />
		</Svg>
	);
};

Icon.displayName = "TumblrLogoFill";

export const TumblrLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
