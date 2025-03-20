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
			<Path d="M136,24A104.33,104.33,0,0,0,54,64H40A16,16,0,0,0,24,80v96a16,16,0,0,0,16,16H54A104,104,0,1,0,136,24ZM72,152V104a8,8,0,0,1,8-8H96a24,24,0,0,1,0,48H88v8a8,8,0,0,1-16,0Zm56,63.63A88.36,88.36,0,0,1,75.63,192H128ZM128,64H75.63A88.36,88.36,0,0,1,128,40.37Zm16-23.63A88.13,88.13,0,0,1,223.63,120H160V80a16,16,0,0,0-16-16Zm0,175.26V192a16,16,0,0,0,16-16V136h63.63A88.13,88.13,0,0,1,144,215.63ZM96,128H88V112h8a8,8,0,0,1,0,16Z" />
		</Svg>
	);
};

Icon.displayName = "MicrosoftPowerpointLogoFill";

export const MicrosoftPowerpointLogoFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
