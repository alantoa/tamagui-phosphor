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
				d="M106.31,130.38a68.13,68.13,0,0,1,45.47-47.32l.15,0c0-1,.07-2,.07-3a64,64,0,0,0-49.62-62.38h0A64.06,64.06,0,0,1,25.62,94.38h0A64.12,64.12,0,0,0,63,138.93h0a44.08,44.08,0,0,1,43.33-8.54Z"
				opacity="0.2"
			/>
			<Path
				d="M63,138.93A64.12,64.12,0,0,1,25.62,94.38h0a64.06,64.06,0,0,0,76.76-76.76h0A64,64,0,0,1,152,80c0,1,0,2-.07,3"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M104,144a68.06,68.06,0,1,1,68,72H92a44,44,0,1,1,14.2-85.66"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "CloudMoonDuotone";

export const CloudMoonDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
