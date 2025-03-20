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
			<Rect x="24" y="40" width="208" height="160" rx="24" />
			<Path d="M160,216H96a8,8,0,0,0,0,16h64a8,8,0,0,0,0-16Z" />
		</Svg>
	);
};

Icon.displayName = "MonitorFill";

export const MonitorFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
