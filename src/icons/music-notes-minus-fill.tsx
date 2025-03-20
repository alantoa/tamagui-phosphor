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
			<Path d="M224,40H176a8,8,0,0,0,0,16h48a8,8,0,0,0,0-16Z" />
			<Path d="M162.13,76.5a31.57,31.57,0,0,1-16.44-38.76A4,4,0,0,0,141,32.53L78.06,48.25A8,8,0,0,0,72,56V166.1A36,36,0,1,0,52.42,232C72.25,231.77,88,215.13,88,195.3V102.25l73.26-18.31A4,4,0,0,0,162.13,76.5Z" />
			<Path d="M212,80h-8a4,4,0,0,0-4,4v50.1A36,36,0,1,0,180.42,200c19.83-.23,35.58-16.86,35.58-36.7V84A4,4,0,0,0,212,80Z" />
		</Svg>
	);
};

Icon.displayName = "MusicNotesMinusFill";

export const MusicNotesMinusFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
