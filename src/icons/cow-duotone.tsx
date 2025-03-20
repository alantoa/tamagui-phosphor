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
			<Rect x="48" y="160" width="160" height="64" rx="32" opacity="0.2" />
			<Path
				d="M64,104A32,32,0,0,1,96,72H63.22a48,48,0,0,0-47.07,38.53A8,8,0,0,0,24,120H64Z"
				opacity="0.2"
			/>
			<Path
				d="M239.85,110.53A48,48,0,0,0,192.78,72H160a32,32,0,0,1,32,32v16h40A8,8,0,0,0,239.85,110.53Z"
				opacity="0.2"
			/>
			<Path
				d="M56,24h0a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48h0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Rect
				x="48"
				y="160"
				width="160"
				height="64"
				rx="32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="80"
				y1="192"
				x2="96"
				y2="192"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="160"
				y1="192"
				x2="176"
				y2="192"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle cx="100" cy="124" r="12" />
			<_Circle cx="156" cy="124" r="12" />
			<Path
				d="M160,72h32.78a48,48,0,0,1,47.07,38.53A8,8,0,0,1,232,120H192"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M96,72H63.22a48,48,0,0,0-47.07,38.53A8,8,0,0,0,24,120H64"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M64,164.28V104A32,32,0,0,1,96,72h64a32,32,0,0,1,32,32v60.28"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "CowDuotone";

export const CowDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
