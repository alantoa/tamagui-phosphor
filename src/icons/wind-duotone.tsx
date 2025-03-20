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
			<_Circle cx="120" cy="72" r="24" opacity="0.2" />
			<_Circle cx="208" cy="104" r="24" opacity="0.2" />
			<_Circle cx="152" cy="184" r="24" opacity="0.2" />
			<Path
				d="M128,192c3.39,9.15,13.67,16,24,16a24,24,0,0,0,0-48H40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M96,64c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H24"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M184,96c3.39-9.15,13.67-16,24-16a24,24,0,0,1,0,48H32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "WindDuotone";

export const WindDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
