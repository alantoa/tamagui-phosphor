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
				d="M81.4,206.6A93.92,93.92,0,0,1,32,122.69c.69-49.55,41.13-90,90.68-90.68A93.92,93.92,0,0,1,206.6,81.4Z"
				opacity="0.2"
			/>
			<Path
				d="M134.58,206.59A31.78,31.78,0,0,1,106,215.41C63.4,207,31.38,167.92,32,122.69c.69-49.55,41.13-90,90.68-90.68,45.23-.63,84.27,31.39,92.72,74a31.78,31.78,0,0,1-8.82,28.58L183,158.21l45.69,32.64a8,8,0,0,1,1,12.16L203,229.66a8,8,0,0,1-12.16-1L158.21,183Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="206.6"
				y1="81.4"
				x2="81.4"
				y2="206.6"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "PingPongDuotone";

export const PingPongDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
