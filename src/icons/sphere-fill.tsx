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
			<Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16c8.15,0,24,31.06,24,88,0,8.24-.34,15.92-.93,23.07-7.15.59-14.83.93-23.07.93-56.94,0-88-15.85-88-24A88.1,88.1,0,0,1,128,40ZM43.4,152.26C63.28,162.65,95.76,168,128,168c7.09,0,14.19-.26,21.17-.77C144.23,199,134,216,128,216A88.17,88.17,0,0,1,43.4,152.26Z" />
		</Svg>
	);
};

Icon.displayName = "SphereFill";

export const SphereFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
