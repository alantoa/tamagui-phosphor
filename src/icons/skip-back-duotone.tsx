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
				d="M200,47.88V208.12a8,8,0,0,1-12.19,6.65L59.7,134.65a7.83,7.83,0,0,1,0-13.3L187.81,41.23A8,8,0,0,1,200,47.88Z"
				opacity="0.2"
			/>
			<Line
				x1="56"
				y1="40"
				x2="56"
				y2="216"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M200,47.88V208.12a8,8,0,0,1-12.19,6.65L59.7,134.65a7.83,7.83,0,0,1,0-13.3L187.81,41.23A8,8,0,0,1,200,47.88Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "SkipBackDuotone";

export const SkipBackDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
