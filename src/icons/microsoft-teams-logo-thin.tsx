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
			<Rect
				x="32"
				y="72"
				width="112"
				height="112"
				rx="8"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M144,88h40a8,8,0,0,1,8,8v72a56,56,0,0,1-56,56h0a56,56,0,0,1-53.68-40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Line
				x1="104"
				y1="104"
				x2="72"
				y2="104"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Line
				x1="88"
				y1="152"
				x2="88"
				y2="104"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M184,88h35.26A4.74,4.74,0,0,1,224,92.74V152a32,32,0,0,1-32,32h0c-.77,0-1.54,0-2.3-.08"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M108.28,72A32,32,0,1,1,144,87"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M166.79,47.27A24,24,0,1,1,184,88"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
		</Svg>
	);
};

Icon.displayName = "MicrosoftTeamsLogoThin";

export const MicrosoftTeamsLogoThin: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
