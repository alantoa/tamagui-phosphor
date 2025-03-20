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
			<Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm-10,99.66c-13.19,15-25.34,20.29-36.37,20.29-14.94,0-27.81-9.61-38.43-17.54-19.2-14.34-31.89-23.81-53.2.48a8,8,0,1,1-12-10.55c31.05-35.41,56.34-16.53,74.8-2.75,19.2,14.34,31.89,23.81,53.2-.48a8,8,0,1,1,12,10.55Z" />
		</Svg>
	);
};

Icon.displayName = "TildeFill";

export const TildeFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
