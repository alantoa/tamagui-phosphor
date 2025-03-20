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
				d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z"
				opacity="0.2"
			/>
			<Path
				d="M209.67,72H46.33a8.06,8.06,0,0,0-8,7.07l-14.25,120a8,8,0,0,0,8,8.93H223.92a8,8,0,0,0,8-8.93l-14.25-120A8.06,8.06,0,0,0,209.67,72Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M88,104V64a40,40,0,0,1,80,0v40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "HandbagDuotone";

export const HandbagDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
