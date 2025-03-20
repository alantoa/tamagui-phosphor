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
				x1="168"
				y1="192"
				x2="176"
				y2="216"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Line
				x1="128"
				y1="192"
				x2="128"
				y2="224"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Line
				x1="88"
				y1="192"
				x2="80"
				y2="216"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Path
				d="M177,68.82C214.29,76.61,240,93,240,112c0,26.51-50.14,48-112,48S16,138.51,16,112c0-19,25.86-35.49,63.35-43.25"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Path
				d="M72,99.9a15.94,15.94,0,0,0,12.34,15.52A195.87,195.87,0,0,0,128,120a195.71,195.71,0,0,0,43.64-4.58A16,16,0,0,0,184,99.9V96a56,56,0,0,0-56.74-56C96.48,40.4,72,66.06,72,96.83Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
		</Svg>
	);
};

Icon.displayName = "FlyingSaucerLight";

export const FlyingSaucerLight: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
