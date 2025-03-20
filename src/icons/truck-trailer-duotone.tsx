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
				d="M120,72H16a8,8,0,0,0-8,8V184a24,24,0,0,1,48,0,24,24,0,0,1,48,0h16Z"
				opacity="0.2"
			/>
			<Path
				d="M216,104h0V96a48,48,0,0,0-48-48h-8a8,8,0,0,0-8,8V184h48a24,24,0,0,1,48,0V136A32,32,0,0,0,216,104Z"
				opacity="0.2"
			/>
			<_Circle
				cx="224"
				cy="184"
				r="24"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle
				cx="32"
				cy="184"
				r="24"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle
				cx="80"
				cy="184"
				r="24"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="200"
				y1="184"
				x2="104"
				y2="184"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M152,184V56a8,8,0,0,1,8-8h8a48,48,0,0,1,48,48v8h0a32,32,0,0,1,32,32v48"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M120,184V72H16a8,8,0,0,0-8,8V184"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "TruckTrailerDuotone";

export const TruckTrailerDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
