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
				d="M104.15,53.57C76,74.82,55.89,115.64,64.08,191.89c76.26,8.2,117.09-11.87,138.35-40A104,104,0,0,1,104.15,53.57Z"
				opacity="0.2"
			/>
			<_Circle cx="156" cy="76" r="12" />
			<Path
				d="M16,183.87C272,240,220,38.7,219,37,217.29,36,16-16,72.1,240"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M202.45,151.85a104,104,0,0,1-98.3-98.3"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "FishSimpleDuotone";

export const FishSimpleDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
