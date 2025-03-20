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
				d="M160,80a32,32,0,0,0-32,32A32,32,0,0,0,96,80H24V200H96a32,32,0,0,1,32,32,32,32,0,0,1,32-32h72V80Z"
				opacity="0.3"
			/>
			<Path
				d="M128,112a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M24,200H96a32,32,0,0,1,32,32V112A32,32,0,0,0,96,80H24Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M96,48a40,40,0,0,1,64,0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "BookOpenUserDuotone";

export const BookOpenUserDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
