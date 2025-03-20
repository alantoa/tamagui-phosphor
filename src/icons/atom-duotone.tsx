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
			<Ellipse
				cx="128"
				cy="128"
				rx="44.13"
				ry="116.33"
				transform="translate(-53.02 128) rotate(-45)"
				opacity="0.2"
			/>
			<Ellipse
				cx="128"
				cy="128"
				rx="44.13"
				ry="116.33"
				transform="translate(-53.02 128) rotate(-45)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Ellipse
				cx="128"
				cy="128"
				rx="116.33"
				ry="44.13"
				transform="translate(-53.02 128) rotate(-45)"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle cx="128" cy="128" r="12" />
		</Svg>
	);
};

Icon.displayName = "AtomDuotone";

export const AtomDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
