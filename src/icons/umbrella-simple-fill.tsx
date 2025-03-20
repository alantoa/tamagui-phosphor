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
			<Path d="M235.76,138.83A16,16,0,0,1,224,144H136v56a16,16,0,0,0,32,0,8,8,0,0,1,16,0,32,32,0,0,1-64,0V144H32a16,16,0,0,1-16-17.37,112.44,112.44,0,0,1,188.2-72.88A111.56,111.56,0,0,1,240,126.63,16.1,16.1,0,0,1,235.76,138.83Z" />
		</Svg>
	);
};

Icon.displayName = "UmbrellaSimpleFill";

export const UmbrellaSimpleFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
