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
				x="72"
				y="56"
				width="112"
				height="56"
				rx="8"
				transform="translate(256 168) rotate(180)"
				opacity="0.2"
			/>
			<Rect x="32" y="144" width="152" height="56" rx="8" opacity="0.2" />
			<Line
				x1="216"
				y1="40"
				x2="216"
				y2="216"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Rect
				x="72"
				y="56"
				width="112"
				height="56"
				rx="8"
				transform="translate(256 168) rotate(180)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Rect
				x="32"
				y="144"
				width="152"
				height="56"
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

Icon.displayName = "AlignRightDuotone";

export const AlignRightDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
