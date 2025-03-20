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
				d="M60.8,72H195.2L176.85,225A8,8,0,0,1,168.9,232H87.1A8,8,0,0,1,79.15,225Z"
				opacity="0.2"
			/>
			<Path
				d="M56,32H200L176.85,225A8,8,0,0,1,168.9,232H87.1A8,8,0,0,1,79.15,225Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="60.8"
				y1="72"
				x2="195.2"
				y2="72"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "PintGlassDuotone";

export const PintGlassDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
