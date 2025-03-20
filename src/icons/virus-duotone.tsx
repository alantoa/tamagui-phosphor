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
				d="M128,40a88,88,0,1,0,88,88A88,88,0,0,0,128,40Zm-20,88a20,20,0,1,1,20-20A20,20,0,0,1,108,128Z"
				opacity="0.2"
			/>
			<_Circle
				cx="128"
				cy="128"
				r="88"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle
				cx="108"
				cy="108"
				r="20"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle cx="176" cy="128" r="16" />
			<_Circle cx="128" cy="176" r="16" />
			<Line
				x1="128"
				y1="16"
				x2="128"
				y2="40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="240"
				y1="128"
				x2="216"
				y2="128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="16"
				y1="128"
				x2="40"
				y2="128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="128"
				y1="216"
				x2="128"
				y2="240"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="48"
				y1="48"
				x2="65.77"
				y2="65.77"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="190.23"
				y1="65.77"
				x2="208"
				y2="48"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="208"
				y1="208"
				x2="190.23"
				y2="190.23"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="48"
				y1="208"
				x2="65.77"
				y2="190.23"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "VirusDuotone";

export const VirusDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
