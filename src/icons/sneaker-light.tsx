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
				d="M32,192a8,8,0,0,0,8,8H240a8,8,0,0,0,8-8V167.06a32,32,0,0,0-21.88-30.35l-60.73-20.25A32,32,0,0,1,146.27,99.1L123,44.75a8,8,0,0,0-10-4.27L37.27,68A8,8,0,0,0,32,75.54Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Line
				x1="32"
				y1="168"
				x2="248"
				y2="168"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Line
				x1="120"
				y1="104"
				x2="144.55"
				y2="95.07"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Line
				x1="104"
				y1="80"
				x2="133.51"
				y2="69.27"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Line
				x1="136"
				y1="128"
				x2="166.61"
				y2="116.87"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
		</Svg>
	);
};

Icon.displayName = "SneakerLight";

export const SneakerLight: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
