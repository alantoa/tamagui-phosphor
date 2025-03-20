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
				d="M128,24S48,72,48,144A80,80,0,0,0,125.94,224,40,40,0,0,1,88,184c0-40,40-64,40-64s40,24,40,64A40,40,0,0,1,130.06,224,80,80,0,0,0,208,144C208,72,128,24,128,24Z"
				opacity="0.2"
			/>
			<Path
				d="M208,144c0-72-80-120-80-120S48,72,48,144a80,80,0,0,0,160,0Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M88,184a40,40,0,0,0,80,0c0-40-40-64-40-64S88,144,88,184Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "FlameDuotone";

export const FlameDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
