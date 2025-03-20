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
			<Path d="M160,152a40,40,0,0,1,80,0Z" opacity="0.2" />
			<Path
				d="M94,124H90a30,30,0,0,0,0-60H32V192H94a34,34,0,0,0,0-68Z"
				opacity="0.2"
			/>
			<Line
				x1="168"
				y1="80"
				x2="232"
				y2="80"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M32,124H94a34,34,0,0,1,0,68H32V64H90a30,30,0,0,1,0,60"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M232,176a40,40,0,1,1,8-24H160"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "BehanceLogoDuotone";

export const BehanceLogoDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
