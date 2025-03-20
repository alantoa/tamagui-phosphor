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
			<Path d="M213.66,82.34l-56-56A8,8,0,0,0,152,24H56A16,16,0,0,0,40,40V216a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V88A8,8,0,0,0,213.66,82.34ZM184,192a8,8,0,0,1-8,8H160a4,4,0,0,1-4-4V160.27a8.17,8.17,0,0,0-7.47-8.25,8,8,0,0,0-8.53,8v36a4,4,0,0,1-4,4H120a4,4,0,0,1-4-4V160.27a8.17,8.17,0,0,0-7.47-8.25,8,8,0,0,0-8.53,8v36a4,4,0,0,1-4,4H80a8,8,0,0,1-8-8V136a8,8,0,0,1,8-8h96a8,8,0,0,1,8,8Z" />
		</Svg>
	);
};

Icon.displayName = "SimCardFill";

export const SimCardFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
