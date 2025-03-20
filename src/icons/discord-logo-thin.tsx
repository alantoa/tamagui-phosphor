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
				d="M80,78.31A178.94,178.94,0,0,1,128,72a178.94,178.94,0,0,1,48,6.31"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M176,177.69A178.94,178.94,0,0,1,128,184a178.94,178.94,0,0,1-48-6.31"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<_Circle cx="92" cy="140" r="8" />
			<_Circle cx="164" cy="140" r="8" />
			<Path
				d="M153.44,73.69l5-19.63a8.1,8.1,0,0,1,9.21-6L203.69,54A8.08,8.08,0,0,1,210.23,60l29.53,116.37a8,8,0,0,1-4.55,9.24l-67,29.7a8.15,8.15,0,0,1-11-4.56L147,183.06"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M102.56,73.69l-5-19.63a8.1,8.1,0,0,0-9.21-6L52.31,54A8.08,8.08,0,0,0,45.77,60L16.24,176.35a8,8,0,0,0,4.55,9.24l67,29.7a8.15,8.15,0,0,0,11-4.56L109,183.06"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
		</Svg>
	);
};

Icon.displayName = "DiscordLogoThin";

export const DiscordLogoThin: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
