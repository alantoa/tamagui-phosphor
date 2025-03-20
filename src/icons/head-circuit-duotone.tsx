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
				d="M215.93,100.72A80,80,0,0,0,56,104L32.65,148.87a8,8,0,0,0,3.77,10.31L64,171.81V208a8,8,0,0,0,8,8h48a16,16,0,0,0,16,16h56l-8-64A79.86,79.86,0,0,0,215.93,100.72ZM112.13,74.08a16,16,0,1,1,13.79,13.79A16,16,0,0,1,112.13,74.08Zm34,77.79a16,16,0,1,1,13.79-13.79A16,16,0,0,1,146.08,151.87Z"
				opacity="0.2"
			/>
			<_Circle
				cx="128"
				cy="72"
				r="16"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle
				cx="144"
				cy="136"
				r="16"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M120,216H72a8,8,0,0,1-8-8V171.81L36.42,159.18a8,8,0,0,1-3.77-10.3L56,104a80,80,0,1,1,128,64l8,64"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="128"
				y1="56"
				x2="128"
				y2="24.39"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="214.38 88 184 88 154.24 123.71"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "HeadCircuitDuotone";

export const HeadCircuitDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
