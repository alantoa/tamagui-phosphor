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
			<Line
				x1="40"
				y1="216"
				x2="216"
				y2="216"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M96,216V136H84A60,60,0,0,1,24,76h0A20,20,0,0,1,44,56h0A20,20,0,0,1,64,76h0A20,20,0,0,0,84,96H96V56a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v80h12a20,20,0,0,0,20-20h0a20,20,0,0,1,20-20h0a20,20,0,0,1,20,20h0a60,60,0,0,1-60,60H160v40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
		</Svg>
	);
};

Icon.displayName = "CactusThin";

export const CactusThin: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
