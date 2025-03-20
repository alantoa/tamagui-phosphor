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
			<_Circle cx="164" cy="52" r="20" opacity="0.2" />
			<Path
				d="M28.44,177.67,185.88,223.3A17.25,17.25,0,0,0,208,206.82h0a17.19,17.19,0,0,0-12.44-16.49L38.12,144.7A17.25,17.25,0,0,0,16,161.18h0A17.19,17.19,0,0,0,28.44,177.67Z"
				opacity="0.2"
			/>
			<_Circle
				cx="164"
				cy="52"
				r="20"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M28.44,177.67,185.88,223.3A17.25,17.25,0,0,0,208,206.82h0a17.19,17.19,0,0,0-12.44-16.49L38.12,144.7A17.25,17.25,0,0,0,16,161.18h0A17.19,17.19,0,0,0,28.44,177.67Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="80"
				y1="80"
				x2="216"
				y2="120"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="131.28"
				y1="95.08"
				x2="88.47"
				y2="159.29"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="114.18 120.73 160 134 134.15 172.53"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "PersonSimpleSnowboardDuotone";

export const PersonSimpleSnowboardDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
