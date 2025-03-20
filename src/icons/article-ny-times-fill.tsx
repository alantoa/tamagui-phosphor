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
			<Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM64,92a8,8,0,0,1-16,0V80a8,8,0,0,1,8-8h72a8,8,0,0,1,8,8V92a8,8,0,0,1-16,0V88H100v48h4a8,8,0,0,1,0,16H80a8,8,0,0,1,0-16h4V88H64Zm136,92H80a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16Zm0-32H136a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H152a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z" />
		</Svg>
	);
};

Icon.displayName = "ArticleNyTimesFill";

export const ArticleNyTimesFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
