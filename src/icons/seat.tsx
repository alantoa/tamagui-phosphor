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
				x1="112"
				y1="232"
				x2="216"
				y2="232"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M104.84,76.42a8,8,0,0,0,0,7.16l31.78,64a8,8,0,0,0,7.16,4.42H208a8,8,0,0,1,8,8v32a8,8,0,0,1-8,8H114.11a8,8,0,0,1-7.15-4.42l-58.12-116a8,8,0,0,1,0-7.16L71,28.42a8,8,0,0,1,10.73-3.57l33.89,14.31a8,8,0,0,1,3.57,10.73Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "Seat";

export const Seat: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
