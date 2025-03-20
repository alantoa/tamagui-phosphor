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
			<Path d="M205.66,181.66l-48,48a8,8,0,0,1-11.32,0l-48-48A8,8,0,0,1,104,168h40V128A88.1,88.1,0,0,0,56,40a8,8,0,0,1,0-16A104.11,104.11,0,0,1,160,128v40h40a8,8,0,0,1,5.66,13.66Z" />
		</Svg>
	);
};

Icon.displayName = "ArrowBendRightDownFill";

export const ArrowBendRightDownFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
