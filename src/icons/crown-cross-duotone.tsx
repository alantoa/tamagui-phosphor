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
				d="M24,116A52,52,0,0,1,76,64c28.72,0,52,19.28,52,48,0-28.72,23.28-48,52-48a52,52,0,0,1,52,52c0,52-48,68-48,68v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V184S24,168,24,116Z"
				opacity="0.2"
			/>
			<Line
				x1="128"
				y1="176"
				x2="128"
				y2="8"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="104"
				y1="32"
				x2="152"
				y2="32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M24,116A52,52,0,0,1,76,64c28.72,0,52,19.28,52,48,0-28.72,23.28-48,52-48a52,52,0,0,1,52,52c0,52-48,68-48,68v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V184S24,168,24,116Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "CrownCrossDuotone";

export const CrownCrossDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
