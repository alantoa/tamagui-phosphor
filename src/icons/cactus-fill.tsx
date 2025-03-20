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
			<Path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H88V136H80A64.07,64.07,0,0,1,16,72,24.07,24.07,0,0,1,40.08,48h.4A23.55,23.55,0,0,1,64,71.52V72h0A16,16,0,0,0,80,88h8V56a40,40,0,0,1,80,0v72h8a16,16,0,0,0,16-16h0v-.48A23.55,23.55,0,0,1,215.52,88h.4A24.07,24.07,0,0,1,240,112a64.07,64.07,0,0,1-64,64h-8v32h48A8,8,0,0,1,224,216Z" />
		</Svg>
	);
};

Icon.displayName = "CactusFill";

export const CactusFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
