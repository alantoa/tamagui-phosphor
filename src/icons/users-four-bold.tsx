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
				cx="80"
				cy="172"
				r="28"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<_Circle
				cx="80"
				cy="60"
				r="28"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<_Circle
				cx="176"
				cy="172"
				r="28"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<_Circle
				cx="176"
				cy="60"
				r="28"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M32,224a60,60,0,0,1,96,0,60,60,0,0,1,96,0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M32,112a60,60,0,0,1,96,0h0a60,60,0,0,1,96,0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
		</Svg>
	);
};

Icon.displayName = "UsersFourBold";

export const UsersFourBold: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
