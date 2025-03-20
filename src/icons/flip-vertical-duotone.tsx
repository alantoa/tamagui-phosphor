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
				d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z"
				opacity="0.2"
			/>
			<Path
				d="M59.12,32.64A8,8,0,0,0,48,40v64a8,8,0,0,0,8,8H216c8.72,0,11.15-12,3.12-15.37Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M219.11,159.37c8-3.4,5.6-15.37-3.12-15.37H56a8,8,0,0,0-8,8v64a8,8,0,0,0,11.12,7.37Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "FlipVerticalDuotone";

export const FlipVerticalDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
