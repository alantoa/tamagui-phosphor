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
				points="160 96 160 40 40 40 40 160 96 160 96 96 160 96"
				opacity="0.2"
			/>
			<Polygon
				points="160 96 160 160 96 160 96 216 216 216 216 96 160 96"
				opacity="0.2"
			/>
			<Rect
				x="40"
				y="40"
				width="120"
				height="120"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Rect
				x="96"
				y="96"
				width="120"
				height="120"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "ExcludeSquareDuotone";

export const ExcludeSquareDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
