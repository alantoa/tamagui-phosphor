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
				d="M80,134.87,223.41,32.09a1,1,0,0,0-.78,0L20,111.38A6.23,6.23,0,0,0,21,123.3l59,11.57"
				opacity="0.2"
			/>
			<Path
				d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87Z"
				opacity="0.2"
			/>
			<Path
				d="M80,134.87,170.26,214a8,8,0,0,0,13.09-4.21L224,33.22a1,1,0,0,0-1.34-1.15L20,111.38A6.23,6.23,0,0,0,21,123.3Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="80"
				y1="134.87"
				x2="223.41"
				y2="32.09"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M124.37,173.78,93.76,205.54A8,8,0,0,1,80,200V134.87"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "TelegramLogoDuotone";

export const TelegramLogoDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
