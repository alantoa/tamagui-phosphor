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
			<Path d="M232,80H199.44a64,64,0,0,1-10.19,77.26c-8.52,8.69-19.61,16.92-31.85,24.51a4,4,0,0,1-4.91-.59l-34.84-34.84a8,8,0,0,0-11.49.18,8.23,8.23,0,0,0,.41,11.38l29.88,29.88a4,4,0,0,1-1,6.39C95.74,214.79,53,228.54,46.78,230.48a16,16,0,0,1-21.26-21.26c2.73-8.71,29-90.27,64.86-133.35a4,4,0,0,1,5.9-.26l42.05,42.06a8,8,0,0,0,11.71-.43,8.19,8.19,0,0,0-.6-11.1L108.08,64.78a4,4,0,0,1,.63-6.18,64,64,0,0,1,67.28-2V24a8,8,0,0,1,8.54-8A8.18,8.18,0,0,1,192,24.27V52.69l26.34-26.35a8,8,0,0,1,11.32,11.32L203.31,64h28.42A8.18,8.18,0,0,1,240,71.47,8,8,0,0,1,232,80Z" />
		</Svg>
	);
};

Icon.displayName = "CarrotFill";

export const CarrotFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
