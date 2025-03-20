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
			<_Circle cx="60" cy="60" r="20" opacity="0.2" />
			<Path
				d="M168,168V104H104L66.34,141.66a8,8,0,0,0,0,11.31L119,205.66a8,8,0,0,0,11.31,0Z"
				opacity="0.2"
			/>
			<Rect
				x="68.12"
				y="74.75"
				width="167.76"
				height="90.51"
				rx="8"
				transform="translate(-40.33 142.63) rotate(-45)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="128"
				y1="144"
				x2="40"
				y2="232"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="104 104 168 104 168 168"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle
				cx="60"
				cy="60"
				r="20"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "CricketDuotone";

export const CricketDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
