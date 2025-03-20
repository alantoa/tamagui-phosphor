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
			<Path d="M244.24,60a8,8,0,0,0-7.75-.4c-42.93,21-73.59,11.16-106,.78C96.4,49.53,61.2,38.28,12.49,62.06A8,8,0,0,0,8,69.24V189.17a8,8,0,0,0,11.51,7.19c42.93-21,73.59-11.16,106.05-.78,19.24,6.15,38.84,12.42,61,12.42,17.09,0,35.73-3.72,56.91-14.06a8,8,0,0,0,4.49-7.18V66.83A8,8,0,0,0,244.24,60ZM48,152a8,8,0,0,1-16,0V88a8,8,0,0,1,16,0Zm80,8a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm96,8a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Z" />
		</Svg>
	);
};

Icon.displayName = "MoneyWavyFill";

export const MoneyWavyFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
