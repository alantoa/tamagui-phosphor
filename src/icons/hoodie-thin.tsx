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
				d="M168,184v24a8,8,0,0,0,8,8h26.57a8,8,0,0,0,7.71-5.9l21.44-78.59a8,8,0,0,0-1.06-6.54L176.38,43.56A8,8,0,0,0,169.73,40H86.27a8,8,0,0,0-6.65,3.56L25.34,125a8,8,0,0,0-1.06,6.54L45.72,210.1a8,8,0,0,0,7.71,5.9H80a8,8,0,0,0,8-8V184"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M128,88l56-33V176a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V55Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Line
				x1="144"
				y1="78.57"
				x2="144"
				y2="128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Line
				x1="112"
				y1="78.57"
				x2="112"
				y2="136"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
		</Svg>
	);
};

Icon.displayName = "HoodieThin";

export const HoodieThin: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
