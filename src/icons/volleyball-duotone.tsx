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
				d="M160,184a95.56,95.56,0,0,1-54.53-17L128,128h45.06a96,96,0,0,0-56.48-95.34h0A95.55,95.55,0,0,0,80,44.86L105.47,89a96,96,0,0,0-54.33,96.58h0A95.75,95.75,0,0,0,80,211.14h0A96,96,0,0,0,216.25,165.8,95.56,95.56,0,0,1,160,184Z"
				opacity="0.2"
			/>
			<Path d="M216.26,165.77v0l0,0Z" opacity="0.2" />
			<_Circle
				cx="128"
				cy="128"
				r="96"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="80"
				y1="44.86"
				x2="128"
				y2="128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="80"
				y1="211.14"
				x2="128"
				y2="128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="224"
				y1="128"
				x2="128"
				y2="128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M116.58,32.66A96,96,0,0,1,173.06,128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M51.14,185.56A96,96,0,0,1,105.47,89"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M216.28,165.78A96,96,0,0,1,105.47,167"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "VolleyballDuotone";

export const VolleyballDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
