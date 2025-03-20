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
				x="52.13"
				y="52.13"
				width="151.73"
				height="151.73"
				rx="7.95"
				transform="translate(-53.02 128) rotate(-45)"
				opacity="0.2"
			/>
			<Line
				x1="128"
				y1="136"
				x2="128"
				y2="80"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle cx="128" cy="172" r="12" />
			<Rect
				x="52.13"
				y="52.13"
				width="151.73"
				height="151.73"
				rx="7.95"
				transform="translate(-53.02 128) rotate(-45)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "WarningDiamondDuotone";

export const WarningDiamondDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
