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
			<Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40,144a8,8,0,0,1-16,0V137.83l-51.35,36.68A8,8,0,0,1,88,168V88a8,8,0,0,1,12.65-6.51L152,118.17V88a8,8,0,0,1,16,0Z" />
		</Svg>
	);
};

Icon.displayName = "SkipForwardCircleFill";

export const SkipForwardCircleFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
