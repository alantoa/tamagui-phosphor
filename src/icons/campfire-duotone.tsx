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
				d="M128,32S76,64,76,108a52,52,0,0,0,52,52,24,24,0,0,1-24-24c0-24,24-40,24-40s24,16,24,40a24,24,0,0,1-24,24,52,52,0,0,0,52-52C180,64,128,32,128,32Z"
				opacity="0.2"
			/>
			<Path
				d="M180,108a52,52,0,0,1-104,0c0-44,52-76,52-76S180,64,180,108Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="40"
				y1="168"
				x2="216"
				y2="224"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="216"
				y1="168"
				x2="40"
				y2="224"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M152,136a24,24,0,0,1-48,0c0-24,24-40,24-40S152,112,152,136Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "CampfireDuotone";

export const CampfireDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
