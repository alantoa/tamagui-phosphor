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
			<Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM72,144a8,8,0,0,1-4.89,7.37A7.86,7.86,0,0,1,64,152H52a8,8,0,0,1,0-16h4V88H52a8,8,0,0,1,0-16H64a8,8,0,0,1,6.91,4L92,112.12,113.09,76A8,8,0,0,1,120,72h12a8,8,0,0,1,0,16h-4v48h4a8,8,0,0,1,0,16H120a7.86,7.86,0,0,1-3.11-.63A8,8,0,0,1,112,144V109.59L98.91,132a8,8,0,0,1-13.82,0L72,109.59Zm128,40H88a8,8,0,0,1,0-16H200a8,8,0,0,1,0,16Zm0-32H160a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Zm0-32H160a8,8,0,0,1,0-16h40a8,8,0,0,1,0,16Z" />
		</Svg>
	);
};

Icon.displayName = "ArticleMediumFill";

export const ArticleMediumFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
