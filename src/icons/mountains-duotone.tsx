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
			<Polygon
				points="50.35 128 125.65 128 168 200 8 200 50.35 128"
				opacity="0.2"
			/>
			<_Circle cx="164" cy="52" r="20" opacity="0.2" />
			<Path
				d="M146.61,163.71l33.06-55.79a8,8,0,0,1,13.76,0L248,200H168Z"
				opacity="0.2"
			/>
			<_Circle
				cx="164"
				cy="52"
				r="20"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M8,200,81.1,75.94a8,8,0,0,1,13.8,0L168,200Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="50.35"
				y1="128"
				x2="125.65"
				y2="128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M146.61,163.71l33.06-55.79a8,8,0,0,1,13.76,0L248,200H168"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "MountainsDuotone";

export const MountainsDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
