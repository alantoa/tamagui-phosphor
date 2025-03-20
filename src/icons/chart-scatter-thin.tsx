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
			<Polyline
				points="224 208 32 208 32 48"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<_Circle cx="132" cy="148" r="8" />
			<_Circle cx="108" cy="92" r="8" />
			<_Circle cx="76" cy="164" r="8" />
			<_Circle cx="172" cy="116" r="8" />
			<_Circle cx="196" cy="76" r="8" />
			<_Circle cx="188" cy="164" r="8" />
		</Svg>
	);
};

Icon.displayName = "ChartScatterThin";

export const ChartScatterThin: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
