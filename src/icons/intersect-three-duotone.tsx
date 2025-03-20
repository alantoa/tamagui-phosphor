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
				d="M128,108a60.06,60.06,0,0,0-59.36-7.28,60,60,0,0,0,36,46.56A59.94,59.94,0,0,1,128,108Z"
				opacity="0.2"
			/>
			<Path
				d="M104.64,147.28A60,60,0,0,0,128,204a60,60,0,0,0,23.36-56.72,60.17,60.17,0,0,1-46.72,0Z"
				opacity="0.2"
			/>
			<Path
				d="M187.36,100.72A60.06,60.06,0,0,0,128,108a59.94,59.94,0,0,1,23.36,39.28A60,60,0,0,0,187.36,100.72Z"
				opacity="0.2"
			/>
			<_Circle
				cx="128"
				cy="92"
				r="60"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle
				cx="164"
				cy="156"
				r="60"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle
				cx="92"
				cy="156"
				r="60"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "IntersectThreeDuotone";

export const IntersectThreeDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
