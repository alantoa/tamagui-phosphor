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
			<Path d="M124,100a24,24,0,1,1,24-24A24,24,0,0,1,124,100Z" />
			<Path d="M144,160a24,24,0,1,1,24-24A24,24,0,0,1,144,160Z" />
			<Path
				d="M120,216H72a8,8,0,0,1-8-8V171.81L36.42,159.18a8,8,0,0,1-3.77-10.3L56,104a80,80,0,1,1,128,64l8,64"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Polyline
				points="214.38 88 184 88 144 136"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Line
				x1="124"
				y1="76"
				x2="124"
				y2="24.89"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
		</Svg>
	);
};

Icon.displayName = "HeadCircuitBold";

export const HeadCircuitBold: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
