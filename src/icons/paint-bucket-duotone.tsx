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
				d="M248,208a16,16,0,0,1-32,0c0-16,16-40,16-40S248,192,248,208Z"
				opacity="0.2"
			/>
			<Path
				d="M116.52,16,20.69,111.83a16,16,0,0,0,0,22.63l84.85,84.85a16,16,0,0,0,22.63,0L208,139.48l24-8Zm21.62,114.14a20,20,0,1,1,0-28.28A20,20,0,0,1,138.14,130.14Z"
				opacity="0.2"
			/>
			<Path
				d="M248,208a16,16,0,0,1-32,0c0-16,16-40,16-40S248,192,248,208Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M208,139.48l-79.83,79.83a16,16,0,0,1-22.63,0L20.69,134.46a16,16,0,0,1,0-22.63L116.52,16,232,131.48Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle
				cx="124"
				cy="116"
				r="20"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="109.86"
				y1="101.86"
				x2="39.99"
				y2="32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "PaintBucketDuotone";

export const PaintBucketDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
