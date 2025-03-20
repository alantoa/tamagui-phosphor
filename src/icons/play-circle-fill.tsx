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
			<Path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm40.55,110.58-52,36A8,8,0,0,1,104,164V92a8,8,0,0,1,12.55-6.58l52,36a8,8,0,0,1,0,13.16Z" />
		</Svg>
	);
};

Icon.displayName = "PlayCircleFill";

export const PlayCircleFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
