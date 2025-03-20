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
			<_Circle cx="128" cy="192" r="40" opacity="0.2" />
			<Path
				d="M168,48v85.82l42.72-19.42a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9Z"
				opacity="0.2"
			/>
			<Path
				d="M88,133.82V48H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z"
				opacity="0.2"
			/>
			<_Circle
				cx="128"
				cy="192"
				r="40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M128,152l82.72-37.6a9,9,0,0,0,5.28-8.2V57a9,9,0,0,0-9-9H49a9,9,0,0,0-9,9v49.2a9,9,0,0,0,5.28,8.2Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="168"
				y1="48"
				x2="168"
				y2="133.82"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="88"
				y1="48"
				x2="88"
				y2="133.82"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "MedalMilitaryDuotone";

export const MedalMilitaryDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
