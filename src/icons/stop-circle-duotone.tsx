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
				d="M128,32a96,96,0,1,0,96,96A96,96,0,0,0,128,32Zm32,128H96V96h64Z"
				opacity="0.2"
			/>
			<_Circle
				cx="128"
				cy="128"
				r="96"
				fill="none"
				stroke={color}
				strokeMiterlimit="10"
				strokeWidth="16"
			/>
			<Rect
				x="96"
				y="96"
				width="64"
				height="64"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "StopCircleDuotone";

export const StopCircleDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
