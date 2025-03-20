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
				d="M224,136c-4.07,49.28-45.67,88-96,88a96,96,0,0,1-96-96c0-50.33,38.72-91.93,88-96"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<Polyline
				points="128 72 128 128 184 128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="12"
			/>
			<_Circle cx="160" cy="36" r="10" />
			<_Circle cx="196" cy="60" r="10" />
			<_Circle cx="220" cy="96" r="10" />
		</Svg>
	);
};

Icon.displayName = "ClockCountdownLight";

export const ClockCountdownLight: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
