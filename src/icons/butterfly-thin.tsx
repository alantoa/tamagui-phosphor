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
			<Line
				x1="128"
				y1="56"
				x2="128"
				y2="180"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M187.76,151.94c8.05.48,29.5-1.29,37.36-32.23C233.21,87.84,240.22,48,208.93,48S128,95.8,128,127.67C128,95.8,78.36,48,47.07,48S22.79,87.84,30.88,119.71c7.86,30.94,29.31,32.71,37.36,32.23"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M88,144a36.11,36.11,0,1,0,40,36,36,36,0,1,0,40-36"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
		</Svg>
	);
};

Icon.displayName = "ButterflyThin";

export const ButterflyThin: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
