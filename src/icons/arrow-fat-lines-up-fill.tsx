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
			<Path d="M231.39,123.06A8,8,0,0,1,224,128H184v24a8,8,0,0,1-8,8H80a8,8,0,0,1-8-8V128H32a8,8,0,0,1-5.66-13.66l96-96a8,8,0,0,1,11.32,0l96,96A8,8,0,0,1,231.39,123.06ZM176,208H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Zm0-32H80a8,8,0,0,0,0,16h96a8,8,0,0,0,0-16Z" />
		</Svg>
	);
};

Icon.displayName = "ArrowFatLinesUpFill";

export const ArrowFatLinesUpFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
