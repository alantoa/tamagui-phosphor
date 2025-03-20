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
				d="M92,224c-28.72,0-52-43-52-96S63.28,32,92,32h72c-28.72,0-52,43-52,96s23.28,96,52,96Z"
				opacity="0.2"
			/>
			<Ellipse cx="168" cy="128" rx="16" ry="40" opacity="0.2" />
			<Ellipse
				cx="168"
				cy="128"
				rx="16"
				ry="40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Ellipse
				cx="164"
				cy="128"
				rx="52"
				ry="96"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M232,224H92c-28.72,0-52-43-52-96S63.28,32,92,32h72"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="40.38 116.3 80 88 112.77 111.41"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="46.85 175.68 80 152 120.65 181.03"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "TireDuotone";

export const TireDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
