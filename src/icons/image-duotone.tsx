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
				d="M97.66,114.34,147.31,164h0L173,138.34a8,8,0,0,1,11.31,0L224,178.06V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V168.69l54.34-54.35A8,8,0,0,1,97.66,114.34Z"
				opacity="0.2"
			/>
			<Rect
				x="32"
				y="48"
				width="192"
				height="160"
				rx="8"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle cx="156" cy="100" r="12" />
			<Path
				d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "ImageDuotone";

export const ImageDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
