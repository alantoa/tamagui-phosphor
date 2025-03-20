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
				d="M144,144H112V112H24v80a8,8,0,0,0,8,8H224a8,8,0,0,0,8-8V112H144Z"
				opacity="0.2"
			/>
			<Path
				d="M72,48H184a48,48,0,0,1,48,48v96a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8V96A48,48,0,0,1,72,48Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="24"
				y1="112"
				x2="112"
				y2="112"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="144"
				y1="112"
				x2="232"
				y2="112"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Rect
				x="112"
				y="96"
				width="32"
				height="48"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="72"
				y1="48"
				x2="72"
				y2="200"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="184"
				y1="48"
				x2="184"
				y2="200"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "TreasureChestDuotone";

export const TreasureChestDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
