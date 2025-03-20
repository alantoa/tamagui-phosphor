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
			<Path d="M128,16A104,104,0,1,0,232,120,104.11,104.11,0,0,0,128,16ZM88,72h80a8,8,0,0,1,0,16H88a8,8,0,0,1,0-16Zm104,88a8,8,0,0,1-8,8H160a24,24,0,0,1-24-24V120H120a48.05,48.05,0,0,1-48,48,8,8,0,0,1,0-16,32,32,0,0,0,32-32H80a8,8,0,0,1,0-16h96a8,8,0,0,1,0,16H152v24a8,8,0,0,0,8,8h16v-8a8,8,0,0,1,16,0Z" />
		</Svg>
	);
};

Icon.displayName = "CurrencyCnyFill";

export const CurrencyCnyFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
