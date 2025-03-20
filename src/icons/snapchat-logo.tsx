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
				d="M167.77,223.44c-12.08,3.09-26.72-7.56-39.77-7.56s-27.69,10.65-39.77,7.56c-12.5-3.2-18.53-22.69-29.57-28.76-11.21-6.17-33.4-2.09-42.66-10.78,0,0,56-20,56-103.93a56,56,0,0,1,112,0c0,83.89,56,103.93,56,103.93-9.26,8.69-31.45,4.61-42.66,10.78C186.3,200.75,180.27,220.24,167.77,223.44Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="66.31"
				y1="122.53"
				x2="40"
				y2="112"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="189.69"
				y1="122.53"
				x2="216"
				y2="112"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "SnapchatLogo";

export const SnapchatLogo: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
