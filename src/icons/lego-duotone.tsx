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
			<Line x1="132.19" y1="69.9" x2="101.56" y2="85.22" opacity="0.2" />
			<Line x1="16" y1="128" x2="52.19" y2="109.9" opacity="0.2" />
			<G opacity="0.2">
				<Polygon points="240 80 240 144 80 224 80 160 240 80" />
			</G>
			<Line
				x1="80"
				y1="160"
				x2="80"
				y2="224"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Ellipse
				cx="80"
				cy="100"
				rx="32"
				ry="20"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Ellipse
				cx="160"
				cy="60"
				rx="32"
				ry="20"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="16 128 80 160 240 80 191.23 55.61"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="132.19"
				y1="69.9"
				x2="101.56"
				y2="85.22"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="240 80 240 144 80 224 16 192 16 128 52.19 109.9"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "LegoDuotone";

export const LegoDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
