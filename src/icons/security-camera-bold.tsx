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
			<Line
				x1="244"
				y1="144"
				x2="244"
				y2="192"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Line
				x1="192"
				y1="44.69"
				x2="60.69"
				y2="176"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M165.66,141.66l24,24a8,8,0,0,0,5.65,2.34H244"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M15,158.93A10,10,0,0,0,22,176H60.69l29.65,29.66a8,8,0,0,0,11.32,0l120-120a8,8,0,0,0,0-11.32l-56-56a8,8,0,0,0-11.32,0Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
		</Svg>
	);
};

Icon.displayName = "SecurityCameraBold";

export const SecurityCameraBold: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
