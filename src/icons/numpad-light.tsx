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
			<_Circle cx="64" cy="48" r="14" />
			<_Circle cx="128" cy="48" r="14" />
			<_Circle cx="192" cy="48" r="14" />
			<_Circle cx="64" cy="104" r="14" />
			<_Circle cx="128" cy="104" r="14" />
			<_Circle cx="192" cy="104" r="14" />
			<_Circle cx="64" cy="160" r="14" />
			<_Circle cx="128" cy="160" r="14" />
			<_Circle cx="128" cy="216" r="14" />
			<_Circle cx="192" cy="160" r="14" />
		</Svg>
	);
};

Icon.displayName = "NumpadLight";

export const NumpadLight: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
