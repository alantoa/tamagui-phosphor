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
				d="M176,120a48,48,0,0,1-48,48"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<_Circle cx="124" cy="100" r="10" />
			<Path
				d="M64,200c17.43,15.6,40.59,24.48,65.94,24,51.48-1,93.33-43.13,94.05-94.61A96,96,0,0,0,128,32h-8V64L16,128l13.79,22a24,24,0,0,0,23.51,9.62c17.47-3,48.06-7.64,74.7,8.34h0L92.13,217.32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
		</Svg>
	);
};

Icon.displayName = "HorseLight";

export const HorseLight: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
