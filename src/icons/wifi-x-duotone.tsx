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
				x1="224"
				y1="56"
				x2="176"
				y2="104"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="224"
				y1="104"
				x2="176"
				y2="56"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M224,104,165.23,45.23A7.94,7.94,0,0,0,161.06,43,181.82,181.82,0,0,0,128,40,179.58,179.58,0,0,0,19.11,76.48,7.79,7.79,0,0,0,17.8,87.69L121.85,213.12a8,8,0,0,0,12.3,0l90.24-108.78Z"
				opacity="0.2"
			/>
			<Path
				d="M136,40.17q-4-.16-8-.17A179.58,179.58,0,0,0,19.11,76.48,7.79,7.79,0,0,0,17.8,87.69L121.85,213.12a8,8,0,0,0,12.3,0L191.49,144"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "WifiXDuotone";

export const WifiXDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
