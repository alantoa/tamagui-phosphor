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
			<Path d="M191.5,118.63l-40-32A12,12,0,0,0,132,96v64a12,12,0,0,0,19.5,9.37l40-32a12,12,0,0,0,0-18.74Z" />
			<Path d="M135.5,118.63l-40-32A12,12,0,0,0,76,96v64a12,12,0,0,0,19.5,9.37l40-32a12,12,0,0,0,0-18.74Z" />
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
		</Svg>
	);
};

Icon.displayName = "FastForwardCircleBold";

export const FastForwardCircleBold: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
