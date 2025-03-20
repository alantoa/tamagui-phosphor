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
				d="M48,112H232a0,0,0,0,1,0,0v0a72,72,0,0,1-72,72H120a72,72,0,0,1-72-72v0A0,0,0,0,1,48,112Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Path
				d="M144,112V48a8,8,0,0,1,8-8h8a72,72,0,0,1,72,72h0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Path
				d="M16,80a32,32,0,0,1,32,32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<_Circle cx="88" cy="224" r="14" />
			<_Circle cx="192" cy="224" r="14" />
			<Line
				x1="144"
				y1="112"
				x2="209.43"
				y2="59.65"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
		</Svg>
	);
};

Icon.displayName = "BabyCarriageLight";

export const BabyCarriageLight: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
