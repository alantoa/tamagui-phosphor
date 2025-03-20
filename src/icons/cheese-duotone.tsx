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
				d="M184,40,24,88v24h8a24,24,0,0,1,24,23.54C56.25,149,44.91,160,31.46,160H24v32H80v-8a32,32,0,0,1,64,0v8h80a8,8,0,0,0,8-8V88A48,48,0,0,0,184,40Zm-16,96a32,32,0,0,1-27.72-48h55.44A32,32,0,0,1,168,136Z"
				opacity="0.2"
			/>
			<Path
				d="M24,160h7.46c13.45,0,24.79-11,24.54-24.46A24,24,0,0,0,32,112H24V88H232v96a8,8,0,0,1-8,8H24Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M24,88,184,40a48,48,0,0,1,48,48"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M80,192v-8a32,32,0,0,1,64,0v8"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M195.72,88a32,32,0,1,1-55.44,0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "CheeseDuotone";

export const CheeseDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
