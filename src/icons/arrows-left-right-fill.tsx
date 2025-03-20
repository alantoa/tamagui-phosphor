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
			<Path d="M213.66,181.66l-32,32A8,8,0,0,1,168,208V184H48a8,8,0,0,1,0-16H168V144a8,8,0,0,1,13.66-5.66l32,32A8,8,0,0,1,213.66,181.66Zm-139.32-64A8,8,0,0,0,88,112V88H208a8,8,0,0,0,0-16H88V48a8,8,0,0,0-13.66-5.66l-32,32a8,8,0,0,0,0,11.32Z" />
		</Svg>
	);
};

Icon.displayName = "ArrowsLeftRightFill";

export const ArrowsLeftRightFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
