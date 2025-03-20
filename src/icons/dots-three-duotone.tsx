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
			<Rect x="16" y="80" width="224" height="96" rx="16" opacity="0.2" />
			<_Circle cx="128" cy="128" r="12" />
			<_Circle cx="196" cy="128" r="12" />
			<_Circle cx="60" cy="128" r="12" />
		</Svg>
	);
};

Icon.displayName = "DotsThreeDuotone";

export const DotsThreeDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
