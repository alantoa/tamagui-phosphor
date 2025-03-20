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
			<Path d="M221.06,110.59,208,106.23V56a16,16,0,0,0-16-16H136V24a8,8,0,0,0-16,0V40H64A16,16,0,0,0,48,56v50.23l-13.06,4.36A16,16,0,0,0,24,125.77V152c0,61.54,97.89,86.72,102.06,87.76a8,8,0,0,0,3.88,0C134.11,238.72,232,213.54,232,152V125.77A16,16,0,0,0,221.06,110.59ZM136,168a8,8,0,0,1-16,0V104.87a8,8,0,0,1,16,0Zm56-67.1L130.53,80.41a8,8,0,0,0-5.06,0L64,100.9V56H192Z" />
		</Svg>
	);
};

Icon.displayName = "BoatFill";

export const BoatFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
