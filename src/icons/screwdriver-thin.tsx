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
				x1="200"
				y1="56"
				x2="144"
				y2="112"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M74.34,132.94a8,8,0,0,1,0-11.32l8-8A8,8,0,0,1,87.17,112H104a8,8,0,0,0,8-8V87.31a8,8,0,0,1,2.34-5.65l53.23-53.23a42.42,42.42,0,0,1,60,0h0a42.42,42.42,0,0,1,0,60l-53.23,53.23a8,8,0,0,1-5.65,2.34H152a8,8,0,0,0-8,8v16.83a8,8,0,0,1-1.62,4.83l-8,8a8,8,0,0,1-11.32,0Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Line
				x1="98.7"
				y1="157.3"
				x2="16"
				y2="240"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
		</Svg>
	);
};

Icon.displayName = "ScrewdriverThin";

export const ScrewdriverThin: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
