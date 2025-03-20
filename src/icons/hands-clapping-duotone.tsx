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
				d="M209.72,101.57,188.61,65a18,18,0,0,0-31.2,18L133.18,41A18,18,0,1,0,102,59L96.28,49A18,18,0,1,0,65.1,67L77.81,89l5.73,10a18,18,0,1,1,31.17-18l23.88,41.26A18,18,0,0,1,170.14,105l20.2,35A71.67,71.67,0,0,1,199,187.75h0A72,72,0,0,0,209.72,101.57Z"
				opacity="0.2"
			/>
			<Line
				x1="168"
				y1="8"
				x2="168"
				y2="24"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="208"
				y1="21.02"
				x2="200"
				y2="34.13"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="235.66"
				y1="56"
				x2="220.62"
				y2="60.85"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M83.54,99,77.81,89a18,18,0,1,0-31.18,18l19,32.91"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M109.55,144l-26-45a18,18,0,1,1,31.17-18l36.45,63"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M102,59,96.28,49A18,18,0,1,0,65.1,67L77.81,89"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M114.71,81,102,59a18,18,0,1,1,31.17-18l37,64"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M199,187.76a72,72,0,0,0,10.7-86.19L188.61,65a18,18,0,0,0-31.18,18"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M81.81,168,61.59,133a18,18,0,0,0-31.18,18L40,167.59,65.63,212a72,72,0,0,0,124.71-72l-20.2-35A18,18,0,1,0,139,123"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "HandsClappingDuotone";

export const HandsClappingDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
