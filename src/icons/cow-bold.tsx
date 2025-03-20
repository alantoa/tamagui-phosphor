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
				d="M56,24h0a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48h0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Rect
				x="48"
				y="172"
				width="160"
				height="52"
				rx="26"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<_Circle cx="104" cy="128" r="16" />
			<_Circle cx="152" cy="128" r="16" />
			<Path
				d="M160,72h32.78a48,48,0,0,1,47.07,38.53A8,8,0,0,1,232,120H192"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M96,72H63.22a48,48,0,0,0-47.07,38.53A8,8,0,0,0,24,120H64"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M64,174V104A32,32,0,0,1,96,72h64a32,32,0,0,1,32,32v70"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
		</Svg>
	);
};

Icon.displayName = "CowBold";

export const CowBold: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
