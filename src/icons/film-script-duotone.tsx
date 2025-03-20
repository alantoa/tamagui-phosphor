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
			<Rect x="48" y="32" width="160" height="192" rx="8" opacity="0.2" />
			<Rect
				x="48"
				y="32"
				width="160"
				height="192"
				rx="8"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle cx="84" cy="80" r="12" />
			<_Circle cx="84" cy="176" r="12" />
			<_Circle cx="84" cy="128" r="12" />
		</Svg>
	);
};

Icon.displayName = "FilmScriptDuotone";

export const FilmScriptDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
