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
				x="-6"
				y="102"
				width="176"
				height="52"
				rx="8"
				transform="translate(210 46) rotate(90)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Rect
				x="86"
				y="102"
				width="176"
				height="52"
				rx="8"
				transform="translate(302 -46) rotate(90)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
		</Svg>
	);
};

Icon.displayName = "ColumnsBold";

export const ColumnsBold: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
