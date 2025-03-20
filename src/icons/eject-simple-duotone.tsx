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
			<Path
				d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z"
				opacity="0.2"
			/>
			<Line
				x1="224"
				y1="200"
				x2="32"
				y2="200"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M33.82,138.8,115.48,38a16.1,16.1,0,0,1,25,0L222.18,138.8a8.1,8.1,0,0,1-6.26,13.2H40.08A8.1,8.1,0,0,1,33.82,138.8Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "EjectSimpleDuotone";

export const EjectSimpleDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
