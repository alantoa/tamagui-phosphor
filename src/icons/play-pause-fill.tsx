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
			<Path d="M184,64V192a8,8,0,0,1-16,0V64a8,8,0,0,1,16,0Zm40-8a8,8,0,0,0-8,8V192a8,8,0,0,0,16,0V64A8,8,0,0,0,224,56Zm-87.33,58.66L48.48,58.51A15.91,15.91,0,0,0,24,71.85v112.3A15.83,15.83,0,0,0,32.23,198a15.95,15.95,0,0,0,16.25-.53l88.19-56.15a15.8,15.8,0,0,0,0-26.68Z" />
		</Svg>
	);
};

Icon.displayName = "PlayPauseFill";

export const PlayPauseFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
