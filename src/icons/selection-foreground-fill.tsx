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
			<Path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM88,200H72a16,16,0,0,1-16-16V168a8,8,0,0,1,16,0v16H88a8,8,0,0,1,0,16Zm0-88H72v16a8,8,0,0,1-16,0V112A16,16,0,0,1,72,96H88a8,8,0,0,1,0,16Zm72,72a16,16,0,0,1-16,16H128a8,8,0,0,1,0-16h16V168a8,8,0,0,1,16,0Zm0-56a8,8,0,0,1-16,0V112H128a8,8,0,0,1,0-16h16a16,16,0,0,1,16,16Zm40,16a16,16,0,0,1-16,16,8,8,0,0,1,0-16h0V72H112a8,8,0,0,1-16,0,16,16,0,0,1,16-16h72a16,16,0,0,1,16,16Z" />
		</Svg>
	);
};

Icon.displayName = "SelectionForegroundFill";

export const SelectionForegroundFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
