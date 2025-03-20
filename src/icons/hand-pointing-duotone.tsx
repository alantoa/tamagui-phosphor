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
				d="M196,96a20,20,0,0,0-20,20V100a20,20,0,0,0-40,0V44a20,20,0,0,0-40,0V152L77.32,122a20,20,0,0,0-34.64,20c37.51,66,49.14,90,93.32,90a80,80,0,0,0,80-80V116A20,20,0,0,0,196,96Z"
				opacity="0.2"
			/>
			<Path
				d="M42.68,142a20,20,0,0,1,34.64-20L96,152V44a20,20,0,0,1,40,0v56a20,20,0,0,1,40,0v16a20,20,0,0,1,40,0v36a80,80,0,0,1-80,80C91.82,232,80.19,208,42.68,142Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "HandPointingDuotone";

export const HandPointingDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
