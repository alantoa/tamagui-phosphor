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
			<G opacity="0.2">
				<Path d="M64,168v48a8,8,0,0,0,8,8h64a8,8,0,0,0,8-8V160H72A8,8,0,0,0,64,168Z" />
				<Path d="M216,96H144v64h72a8,8,0,0,0,8-8V104A8,8,0,0,0,216,96Z" />
				<Path d="M136,32H72a8,8,0,0,0-8,8V88a8,8,0,0,0,8,8h72V40A8,8,0,0,0,136,32Z" />
			</G>
			<Path
				d="M144,40V216a8,8,0,0,1-8,8H72a8,8,0,0,1-8-8V168a8,8,0,0,1,8-8H216a8,8,0,0,0,8-8V104a8,8,0,0,0-8-8H72a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64A8,8,0,0,1,144,40Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "ReplitLogoDuotone";

export const ReplitLogoDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
