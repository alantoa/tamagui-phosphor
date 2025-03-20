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
			<Rect
				x="116"
				y="100"
				width="112"
				height="56"
				rx="8"
				transform="translate(300 -44) rotate(90)"
				opacity="0.2"
			/>
			<Rect x="56" y="72" width="56" height="152" rx="8" opacity="0.2" />
			<Line
				x1="216"
				y1="40"
				x2="40"
				y2="40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Rect
				x="116"
				y="100"
				width="112"
				height="56"
				rx="8"
				transform="translate(300 -44) rotate(90)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Rect
				x="56"
				y="72"
				width="56"
				height="152"
				rx="8"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "AlignTopDuotone";

export const AlignTopDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
