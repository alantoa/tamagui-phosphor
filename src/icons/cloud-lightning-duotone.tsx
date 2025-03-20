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
				d="M156,24A68.16,68.16,0,0,0,90.19,74.45v-.11A44,44,0,1,0,76,160h80a68,68,0,0,0,0-136Z"
				opacity="0.2"
			/>
			<Path
				d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="120 240 144 200 104 200 128 160"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "CloudLightningDuotone";

export const CloudLightningDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
