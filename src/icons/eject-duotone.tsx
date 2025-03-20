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
			<Rect
				x="108"
				y="92"
				width="40"
				height="176"
				rx="8"
				transform="translate(-52 308) rotate(-90)"
				opacity="0.2"
			/>
			<Path
				d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z"
				opacity="0.2"
			/>
			<Rect
				x="108"
				y="92"
				width="40"
				height="176"
				rx="8"
				transform="translate(-52 308) rotate(-90)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M42.19,114.63l73.74-77.5a16.76,16.76,0,0,1,24.14,0l73.74,77.5c4.85,5.1,1.12,13.37-6,13.37H48.23C41.07,128,37.34,119.73,42.19,114.63Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "EjectDuotone";

export const EjectDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
