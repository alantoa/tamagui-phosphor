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
			<Path d="M48,56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8V96H48Z" opacity="0.2" />
			<Path d="M152,56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8V96H152Z" opacity="0.2" />
			<Line
				x1="48"
				y1="96"
				x2="104"
				y2="96"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="152"
				y1="96"
				x2="208"
				y2="96"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M104,144a24,24,0,0,0,48,0V56a8,8,0,0,1,8-8h40a8,8,0,0,1,8,8v87c0,44.11-35.28,80.67-79.39,81A80,80,0,0,1,48,144V56a8,8,0,0,1,8-8H96a8,8,0,0,1,8,8Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "MagnetStraightDuotone";

export const MagnetStraightDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
