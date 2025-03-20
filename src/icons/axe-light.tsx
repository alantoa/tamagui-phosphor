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
			<Path
				d="M164.47,189.65a8,8,0,0,1-13.6-4.68c-7.09-53.14-42.41-87.8-59.45-99.76A8,8,0,0,1,90.33,73L129,34.33a8,8,0,0,1,12.2,1.09c12,17,46.62,52.36,99.76,59.45a8,8,0,0,1,4.68,13.6Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Path
				d="M151.78,48.22,171,29a17,17,0,0,1,24,0h0a17,17,0,0,1,0,24L177.7,70.3"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Path
				d="M126.3,121.7,37,211a17,17,0,0,1-24,0h0a17,17,0,0,1,0-24l91.25-91.25"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
		</Svg>
	);
};

Icon.displayName = "AxeLight";

export const AxeLight: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
