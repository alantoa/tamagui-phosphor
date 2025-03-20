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
				d="M56,32H200a16,16,0,0,1,16,16V208a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V48A16,16,0,0,1,56,32Z"
				opacity="0.2"
			/>
			<Line
				x1="128"
				y1="144"
				x2="128"
				y2="32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="216 144 216 208 40 208 40 144"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="168 104 128 144 88 104"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "DownloadSimpleDuotone";

export const DownloadSimpleDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
