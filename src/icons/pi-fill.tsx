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
			<Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM172,168a12,12,0,0,0,12-12,8,8,0,0,1,16,0,28,28,0,0,1-56,0V96H112v80a8,8,0,0,1-16,0V96H88a24,24,0,0,0-24,24,8,8,0,0,1-16,0A40,40,0,0,1,88,80H192a8,8,0,0,1,0,16H160v60A12,12,0,0,0,172,168Z" />
		</Svg>
	);
};

Icon.displayName = "PiFill";

export const PiFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
