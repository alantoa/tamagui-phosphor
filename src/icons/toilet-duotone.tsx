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
				d="M163.58,192.51h0a88.21,88.21,0,0,1-71.14,0h0l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13Z"
				opacity="0.2"
			/>
			<Path d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72Z" opacity="0.2" />
			<Path
				d="M64,112V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8v72"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="96"
				y1="64"
				x2="112"
				y2="64"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M216,112a88,88,0,0,1-176,0Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M92.42,192.51l-4.34,30.36A8,8,0,0,0,96,232h64a8,8,0,0,0,7.92-9.13l-4.34-30.36"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "ToiletDuotone";

export const ToiletDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
