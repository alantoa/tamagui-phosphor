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
				d="M72,40H200a0,0,0,0,1,0,0V200a16,16,0,0,1-16,16H56a0,0,0,0,1,0,0V56A16,16,0,0,1,72,40Z"
				opacity="0.2"
			/>
			<Line
				x1="72"
				y1="128"
				x2="184"
				y2="128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M56,216H85.29a32,32,0,0,0,31.49-26.28L139.22,66.28A32,32,0,0,1,170.71,40H200"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "FunctionDuotone";

export const FunctionDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
