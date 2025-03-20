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
				d="M59.66,135.35a44.08,44.08,0,0,1,38.54-5v.11a68.22,68.22,0,0,1,41.65-46v0a48,48,0,1,0-80.19,50.94Z"
				opacity="0.2"
			/>
			<Line
				x1="87.66"
				y1="56.73"
				x2="83.5"
				y2="33.09"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="56.69"
				y1="76.46"
				x2="37.03"
				y2="62.69"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="48.73"
				y1="112.31"
				x2="25.09"
				y2="116.48"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="123.52"
				y1="64.69"
				x2="137.28"
				y2="45.03"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M96,144a68.06,68.06,0,1,1,68,72H84a44,44,0,1,1,14.2-85.66"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M59.65,135.35a48,48,0,1,1,80.19-50.94"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "CloudSunDuotone";

export const CloudSunDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
