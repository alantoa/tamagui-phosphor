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
				x="80"
				y="64"
				width="96"
				height="48"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Rect
				x="32"
				y="48"
				width="192"
				height="160"
				rx="8"
				transform="translate(256) rotate(90)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<_Circle cx="88" cy="148" r="10" />
			<_Circle cx="128" cy="148" r="10" />
			<_Circle cx="168" cy="148" r="10" />
			<_Circle cx="88" cy="188" r="10" />
			<_Circle cx="128" cy="188" r="10" />
			<_Circle cx="168" cy="188" r="10" />
		</Svg>
	);
};

Icon.displayName = "CalculatorLight";

export const CalculatorLight: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
