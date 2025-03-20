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
			<Path d="M200,40H168a16,16,0,0,0-16-16H32A16,16,0,0,0,16,40v80a16,16,0,0,0,16,16h8v64a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40ZM106.34,61.66a8,8,0,0,1,11.32-11.32l24,24a8,8,0,0,1,0,11.32l-24,24a8,8,0,0,1-11.32-11.32L124.69,80Zm-64,24a8,8,0,0,1,0-11.32l24-24A8,8,0,0,1,77.66,61.66L59.31,80,77.66,98.34a8,8,0,0,1-11.32,11.32ZM200,200H56V136h96a16,16,0,0,0,16-16V56h32Z" />
		</Svg>
	);
};

Icon.displayName = "CodeBlockFill";

export const CodeBlockFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
