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
			<Path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM116,162.64a40,40,0,1,1,0-69.28,8,8,0,1,1-8,13.85,24,24,0,1,0,0,41.58,8,8,0,0,1,8,13.85Zm80,0a40,40,0,1,1,0-69.28,8,8,0,1,1-8,13.85,24,24,0,1,0,0,41.58,8,8,0,0,1,8,13.85Z" />
		</Svg>
	);
};

Icon.displayName = "ClosedCaptioningFill";

export const ClosedCaptioningFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
