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
				d="M208,104a80,80,0,0,0-160,0c0,40.83,30.59,88.18,70.1,95.13h0L104,232h48l-14.09-32.87h0C177.41,192.18,208,144.83,208,104Z"
				opacity="0.2"
			/>
			<Path
				d="M208,104c0,44.18-35.82,96-80,96s-80-51.82-80-96a80,80,0,0,1,160,0Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M136,56a49.52,49.52,0,0,1,40,40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="137.91 199.13 152 232 104 232 118.09 199.13"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "BalloonDuotone";

export const BalloonDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
