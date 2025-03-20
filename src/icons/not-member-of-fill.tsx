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
			<Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM190,69.27,145.63,120H176a8,8,0,0,1,0,16H131.63l-28.76,32.87A47.72,47.72,0,0,0,128,176h48a8,8,0,0,1,0,16H128a63.62,63.62,0,0,1-35.78-11L78,197.27a8,8,0,0,1-12-10.54l14.21-16.24A64,64,0,0,1,128,64h45.37L178,58.73a8,8,0,1,1,12,10.54ZM128,80h31.37l-35,40H80.68A48.07,48.07,0,0,1,128,80ZM80.68,136h29.69L90.84,158.32A47.78,47.78,0,0,1,80.68,136Z" />
		</Svg>
	);
};

Icon.displayName = "NotMemberOfFill";

export const NotMemberOfFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
