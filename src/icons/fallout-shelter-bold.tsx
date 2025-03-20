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
			<_Circle
				cx="128"
				cy="128"
				r="96"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path d="M162.58,78.34A12,12,0,0,0,152,72H104A12,12,0,0,0,94,90.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,162.58,78.34Z" />
			<Path d="M194.58,126.34A12,12,0,0,0,184,120H136a12,12,0,0,0-10,18.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,194.58,126.34Z" />
			<Path d="M130.58,126.34A12,12,0,0,0,120,120H72a12,12,0,0,0-10,18.66l24,36a12,12,0,0,0,20,0l24-36A12,12,0,0,0,130.58,126.34Z" />
		</Svg>
	);
};

Icon.displayName = "FalloutShelterBold";

export const FalloutShelterBold: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
