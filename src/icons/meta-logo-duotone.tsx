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
				d="M182,56c-12.62,0-24.1,10.7-35,26.27L128.49,114.6c21.76,39.86,42.91,85.4,68.95,85.4C259.16,200,228.3,56,182,56Z"
				opacity="0.2"
			/>
			<Path
				d="M74,56C27.7,56-3.16,200,58.56,200c19,0,35.32-24.14,51.22-52.65l18.71-32.75C111.56,83.58,94.25,56,74,56Z"
				opacity="0.2"
			/>
			<Path
				d="M109.78,147.35C93.88,175.86,77.52,200,58.56,200-3.16,200,27.7,56,74,56s77.15,144,123.45,144C259.16,200,228.3,56,182,56c-12.62,0-24.1,10.7-35,26.27"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "MetaLogoDuotone";

export const MetaLogoDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
