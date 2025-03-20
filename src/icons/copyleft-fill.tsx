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
			<Path d="M128,56a72,72,0,1,0,72,72A72.08,72.08,0,0,0,128,56Zm0,120a47.66,47.66,0,0,1-38.4-19.19,8,8,0,0,1,12.8-9.61,32,32,0,1,0,0-38.4,8,8,0,0,1-12.8-9.61A48,48,0,1,1,128,176Zm0-152A104,104,0,1,0,232,128,104,104,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Z" />
		</Svg>
	);
};

Icon.displayName = "CopyleftFill";

export const CopyleftFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
