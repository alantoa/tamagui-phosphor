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
				d="M188,56a20,20,0,0,0-20,20V44a20,20,0,0,0-40,0V60a20,20,0,0,0-40,0v92L69.32,122a20,20,0,0,0-34.64,20c32.57,68.72,49.14,90,93.32,90a80,80,0,0,0,80-80V76A20,20,0,0,0,188,56Z"
				opacity="0.2"
			/>
			<Path
				d="M168,76a20,20,0,0,1,40,0v76a80,80,0,0,1-80,80c-44.18,0-60.75-21.28-93.32-90a20,20,0,0,1,34.64-20L88,152V60a20,20,0,0,1,40,0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M128,120V44a20,20,0,0,1,40,0v76"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "HandDuotone";

export const HandDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
