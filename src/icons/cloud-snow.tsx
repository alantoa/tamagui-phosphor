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
			<_Circle cx="76" cy="196" r="12" />
			<_Circle cx="116" cy="212" r="12" />
			<_Circle cx="164" cy="196" r="12" />
			<_Circle cx="68" cy="236" r="12" />
			<_Circle cx="156" cy="236" r="12" />
			<Path
				d="M88,88a68.06,68.06,0,1,1,68,72H76A44,44,0,1,1,90.2,74.34"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "CloudSnow";

export const CloudSnow: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
