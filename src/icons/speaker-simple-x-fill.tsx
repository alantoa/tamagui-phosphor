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
			<Path d="M163.52,24.81a8,8,0,0,0-8.43.88L85.25,80H40A16,16,0,0,0,24,96v64a16,16,0,0,0,16,16H85.25l69.84,54.31A7.94,7.94,0,0,0,160,232a8,8,0,0,0,8-8V32A8,8,0,0,0,163.52,24.81Z" />
			<Path d="M235.31,128l18.35-18.34a8,8,0,0,0-11.32-11.32L224,116.69,205.66,98.34a8,8,0,0,0-11.32,11.32L212.69,128l-18.35,18.34a8,8,0,0,0,11.32,11.32L224,139.31l18.34,18.35a8,8,0,0,0,11.32-11.32Z" />
		</Svg>
	);
};

Icon.displayName = "SpeakerSimpleXFill";

export const SpeakerSimpleXFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
