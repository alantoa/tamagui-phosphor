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
				x1="160"
				y1="35.22"
				x2="160"
				y2="8"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Line
				x1="96"
				y1="8"
				x2="96"
				y2="35.22"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M200,224a8,8,0,0,0,7.35-11.15L160,112l22.86-35.88a8,8,0,0,0,0-8.24L160,35.22,153,44a32,32,0,0,1-50,0l-7-8.77L73.14,67.88a8,8,0,0,0,0,8.24L96,112,48.66,212.85A8,8,0,0,0,56,224Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Line
				x1="96"
				y1="112"
				x2="160"
				y2="112"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
		</Svg>
	);
};

Icon.displayName = "DressThin";

export const DressThin: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
