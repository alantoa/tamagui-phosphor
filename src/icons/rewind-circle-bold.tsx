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
			<_Circle
				cx="128"
				cy="128"
				r="96"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path d="M117.2,85.18a12,12,0,0,0-12.7,1.45l-40,32a12,12,0,0,0,0,18.74l40,32A12,12,0,0,0,124,160V96A12,12,0,0,0,117.2,85.18Z" />
			<Path d="M173.2,85.18a12,12,0,0,0-12.7,1.45l-40,32a12,12,0,0,0,0,18.74l40,32A12,12,0,0,0,180,160V96A12,12,0,0,0,173.2,85.18Z" />
		</Svg>
	);
};

Icon.displayName = "RewindCircleBold";

export const RewindCircleBold: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
