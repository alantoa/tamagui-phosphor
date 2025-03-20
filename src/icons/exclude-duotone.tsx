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
				d="M88,160a72,72,0,0,1,72-72,73.37,73.37,0,0,1,7.6.4,72,72,0,1,0-79.2,79.2A73.37,73.37,0,0,1,88,160Z"
				opacity="0.2"
			/>
			<Path
				d="M167.6,88.4A73.37,73.37,0,0,1,168,96a72,72,0,0,1-72,72,73.37,73.37,0,0,1-7.6-.4,72,72,0,1,0,79.2-79.2Z"
				opacity="0.2"
			/>
			<_Circle
				cx="96"
				cy="96"
				r="72"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle
				cx="160"
				cy="160"
				r="72"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "ExcludeDuotone";

export const ExcludeDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
