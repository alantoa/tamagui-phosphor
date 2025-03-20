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
			<Path d="M224,216a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,216ZM80,176a8,8,0,0,0,5.66-2.34L144,115.31l42.34,42.35A8,8,0,0,0,200,152V56a8,8,0,0,0-8-8H96a8,8,0,0,0-5.66,13.66L132.69,104,74.34,162.34A8,8,0,0,0,80,176Z" />
		</Svg>
	);
};

Icon.displayName = "ArrowLineUpRightFill";

export const ArrowLineUpRightFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
