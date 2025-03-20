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
			<Polygon
				points="192 128 224 72 160.01 72.01 128 16 95.98 72.03 32 72.04 63.98 128 32 183.96 95.98 183.97 128 240 160.01 183.99 224 184 192 128"
				opacity="0.2"
			/>
			<Polygon
				points="128 240 224 72 32 72.04 128 240"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polygon
				points="128 16 224 184 32 183.96 128 16"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "StarOfDavidDuotone";

export const StarOfDavidDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
