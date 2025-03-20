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
				d="M216,48a8,8,0,0,0-10.89-7.47C190,46.41,160.89,55.71,128,55.71s-62-9.3-77.11-15.16A8,8,0,0,0,40,48v55.77C40,174.6,79.4,232,128,232s88-57.4,88-128.21Z"
				opacity="0.2"
			/>
			<Path
				d="M216,48a8,8,0,0,0-10.89-7.47C190,46.41,160.89,55.71,128,55.71s-62-9.3-77.11-15.16A8,8,0,0,0,40,48v55.77C40,174.6,79.4,232,128,232s88-57.4,88-128.21Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M144,128c4.39-4.91,12.89-8,20-8s15.61,3.09,20,8"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M72,128c4.39-4.91,12.89-8,20-8s15.61,3.09,20,8"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M162.36,168a44.89,44.89,0,0,1-68.72,0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "MaskHappyDuotone";

export const MaskHappyDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
