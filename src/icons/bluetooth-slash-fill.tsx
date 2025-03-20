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
			<Path d="M221.38,221.92a8,8,0,0,1-11.3-.54l-26.45-29.1L132.8,230.4a8,8,0,0,1-8.89.47,8.29,8.29,0,0,1-3.91-7.18V144L68.8,182.4a8,8,0,0,1-11.16-1.55,8.26,8.26,0,0,1,1.81-11.43l61.47-46.11L50.08,45.38A8,8,0,0,1,61.92,34.62l160,176A8,8,0,0,1,221.38,221.92ZM155,113.22a4,4,0,0,0,5.36.51L196.8,86.4a8,8,0,0,0,0-12.8l-64-48a8,8,0,0,0-10,.29A8.25,8.25,0,0,0,120,32.24V73.18a4,4,0,0,0,1,2.69Z" />
		</Svg>
	);
};

Icon.displayName = "BluetoothSlashFill";

export const BluetoothSlashFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
