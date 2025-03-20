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
			<Ellipse
				cx="168"
				cy="88"
				rx="79.51"
				ry="63.61"
				transform="translate(-13.02 144.57) rotate(-45)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Rect
				x="24.69"
				y="187.03"
				width="54.63"
				height="33.94"
				rx="8"
				transform="translate(-129.02 96.52) rotate(-45)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Line
				x1="71.31"
				y1="184.69"
				x2="111.78"
				y2="144.22"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Line
				x1="192"
				y1="16.5"
				x2="192"
				y2="148.98"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Line
				x1="144"
				y1="27.02"
				x2="144"
				y2="159.5"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Line
				x1="107.02"
				y1="64"
				x2="239.5"
				y2="64"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Line
				x1="96.5"
				y1="112"
				x2="228.98"
				y2="112"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
		</Svg>
	);
};

Icon.displayName = "RacquetLight";

export const RacquetLight: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
