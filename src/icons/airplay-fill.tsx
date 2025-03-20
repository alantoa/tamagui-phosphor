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
			<Path d="M174.15,210.88A8,8,0,0,1,168,224H88a8,8,0,0,1-6.15-13.12l40-48a8,8,0,0,1,12.29,0ZM208,40H48A24,24,0,0,0,24,64V176a24,24,0,0,0,24,24H68.22a4,4,0,0,0,3.07-1.44l38.28-45.92a24,24,0,0,1,21-8.51,24.68,24.68,0,0,1,16.25,8.94l37.91,45.49a4,4,0,0,0,3.07,1.44H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Z" />
		</Svg>
	);
};

Icon.displayName = "AirplayFill";

export const AirplayFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
