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
			<Path d="M146.85,96l14.54,32H94.61l14.54-32ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56Zm-24,80a8,8,0,0,0-8-8H179L164.42,96H176a8,8,0,0,0,0-16H80a8,8,0,0,0,0,16H91.58L77,128H56a8,8,0,0,0,0,16H69.76l-13,28.69a8,8,0,1,0,14.56,6.62l16-35.31h81.34l16.05,35.31a8,8,0,0,0,14.56-6.62l-13-28.69H200A8,8,0,0,0,208,136Z" />
		</Svg>
	);
};

Icon.displayName = "PicnicTableFill";

export const PicnicTableFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
