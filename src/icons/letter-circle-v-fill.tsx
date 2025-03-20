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
			<Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm39.43,75-32,80a8,8,0,0,1-14.86,0l-32-80A8,8,0,0,1,103.43,93L128,154.46,152.57,93A8,8,0,1,1,167.43,99Z" />
		</Svg>
	);
};

Icon.displayName = "LetterCircleVFill";

export const LetterCircleVFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
