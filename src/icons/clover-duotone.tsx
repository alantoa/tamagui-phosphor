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
			<G opacity="0.2">
				<Path d="M128,24c-90,0,0,96,0,96S218,24,128,24Z" />
				<Path d="M32,120c0,90,96,0,96,0S32,30,32,120Z" />
				<Path d="M128,216c90,0,0-96,0-96S38,216,128,216Z" />
				<Path d="M128,120s96,90,96,0S128,120,128,120Z" />
			</G>
			<Path
				d="M128,120s90-96,0-96S128,120,128,120Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M128,120s-96-90-96,0S128,120,128,120Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M128,120s-90,96,0,96S128,120,128,120Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M128,120s96,90,96,0S128,120,128,120Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M128,120s64,56,80,120"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "CloverDuotone";

export const CloverDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
