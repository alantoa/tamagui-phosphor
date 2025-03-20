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
				d="M112.8,173.45c-11.81,9.79-27.19,19.26-43.89,18.48A64,64,0,0,1,72,64H183.05c35.17,0,64.49,28,64.94,63.15A64,64,0,0,1,184,192c-15.48,0-29.68-9.35-40.75-18.5A23.91,23.91,0,0,0,112.8,173.45Z"
				opacity="0.2"
			/>
			<Path
				d="M112.8,173.45c-11.81,9.79-27.19,19.26-43.89,18.48A64,64,0,0,1,72,64H183.05c35.17,0,64.49,28,64.94,63.15A64,64,0,0,1,184,192c-15.48,0-29.68-9.35-40.75-18.5A23.91,23.91,0,0,0,112.8,173.45Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="80"
				y1="96"
				x2="176"
				y2="96"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "VisorDuotone";

export const VisorDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
