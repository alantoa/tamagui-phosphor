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
				x1="40"
				y1="128"
				x2="216"
				y2="128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<_Circle cx="128" cy="64" r="14" />
			<_Circle cx="128" cy="192" r="14" />
		</Svg>
	);
};

Icon.displayName = "DivideLight";

export const DivideLight: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
