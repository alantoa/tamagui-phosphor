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
			<Path d="M224,72h-.85a16,16,0,0,0-9.68-10L133.47,33a16.06,16.06,0,0,0-10.94,0l-80,29.09a16,16,0,0,0-9.68,10H32A32,32,0,0,0,0,104v24a32,32,0,0,0,32,32h5.19c7.19,15.8,21.79,29.43,43.23,40.16a191.16,191.16,0,0,0,46.15,15.71,7.93,7.93,0,0,0,2.86,0,191.16,191.16,0,0,0,46.15-15.71c21.44-10.73,36-24.36,43.23-40.16H224a32,32,0,0,0,32-32V104A32,32,0,0,0,224,72ZM32,144a16,16,0,0,1-16-16V104A16,16,0,0,1,32,88v48a58.74,58.74,0,0,0,.55,8Zm136,0H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm0-32H88a8,8,0,0,1,0-16h80a8,8,0,0,1,0,16Zm72,16a16,16,0,0,1-16,16h-.55a58.74,58.74,0,0,0,.55-8V88a16,16,0,0,1,16,16Z" />
		</Svg>
	);
};

Icon.displayName = "FaceMaskFill";

export const FaceMaskFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
