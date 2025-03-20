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
			<Path d="M92,68H57.94a4,4,0,0,0-4,3.5l-6,48a4,4,0,0,0,4,4.5A44.05,44.05,0,0,0,96,80V72A4,4,0,0,0,92,68Z" />
			<Path d="M208,119.5l-6-48a4,4,0,0,0-4-3.5H164a4,4,0,0,0-4,4v8a44.06,44.06,0,0,0,44.06,44,4,4,0,0,0,4-4.5Z" />
			<Path
				d="M186,32a8,8,0,0,1,7.94,7l22,176a8,8,0,0,1-7.94,9H167.31a8,8,0,0,1-7.76-6.06L128,96,96.45,217.94A8,8,0,0,1,88.69,224H48a8,8,0,0,1-7.94-9l22-176A8,8,0,0,1,70,32Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Line
				x1="128"
				y1="96"
				x2="128"
				y2="72"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Line
				x1="57.94"
				y1="72"
				x2="198.06"
				y2="72"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
		</Svg>
	);
};

Icon.displayName = "PantsBold";

export const PantsBold: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
