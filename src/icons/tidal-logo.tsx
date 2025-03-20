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
				x="19.72"
				y="67.72"
				width="56.57"
				height="56.57"
				transform="translate(-53.82 62.06) rotate(-45)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Rect
				x="99.72"
				y="67.72"
				width="56.57"
				height="56.57"
				transform="translate(-30.39 118.63) rotate(-45)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Rect
				x="99.72"
				y="147.72"
				width="56.57"
				height="56.57"
				transform="translate(-86.96 142.06) rotate(-45)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Rect
				x="179.72"
				y="67.72"
				width="56.57"
				height="56.57"
				transform="translate(-6.96 175.2) rotate(-45)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "TidalLogo";

export const TidalLogo: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
