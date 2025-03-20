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
				d="M200,64h0a16,16,0,0,1,16,16v32H184V80A16,16,0,0,1,200,64Z"
				opacity="0.2"
			/>
			<Path
				d="M56,64h0A16,16,0,0,1,72,80v32H40V80A16,16,0,0,1,56,64Z"
				opacity="0.2"
			/>
			<Path
				d="M72,216h40V176a16,16,0,0,1,16-16h0a16,16,0,0,1,16,16v40h40V136l-56-32L72,136Z"
				opacity="0.2"
			/>
			<Path
				d="M200,64h0a16,16,0,0,1,16,16V216a0,0,0,0,1,0,0H184a0,0,0,0,1,0,0V80a16,16,0,0,1,16-16Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="184"
				y1="112"
				x2="216"
				y2="112"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M56,64h0A16,16,0,0,1,72,80V216a0,0,0,0,1,0,0H40a0,0,0,0,1,0,0V80A16,16,0,0,1,56,64Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="40"
				y1="112"
				x2="72"
				y2="112"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="56"
				y1="64"
				x2="56"
				y2="32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="200"
				y1="64"
				x2="200"
				y2="32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="184 136 128 104 72 136"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M72,216h40V176a16,16,0,0,1,16-16h0a16,16,0,0,1,16,16v40h40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="128"
				y1="104"
				x2="128"
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

Icon.displayName = "SynagogueDuotone";

export const SynagogueDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
