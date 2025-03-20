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
				d="M37.67,216C51.16,189.65,70,144.55,71.86,95.64a8,8,0,0,1,8-7.64h56.3a8,8,0,0,1,8,7.64c1.83,48.91,20.7,94,34.19,120.36Z"
				opacity="0.2"
			/>
			<Path
				d="M192,24a16,16,0,0,1-16,16H152a16,16,0,0,0-16,16"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M160,8h-8a48,48,0,0,0-48,48"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="16"
				y1="216"
				x2="240"
				y2="216"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M37.67,216C51.16,189.65,70,144.55,71.86,95.64a8,8,0,0,1,8-7.64h56.3a8,8,0,0,1,8,7.64c1.83,48.91,20.7,94,34.19,120.36"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M136.15,88h32a8,8,0,0,1,8,7.63c2.35,53.58,28.62,103.25,38.64,120.37"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "NuclearPlantDuotone";

export const NuclearPlantDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
