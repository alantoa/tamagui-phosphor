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
			<Polygon
				points="107.9 130.14 90.27 160.1 80 232 176 232 166.36 164.55 107.9 130.14"
				opacity="0.2"
			/>
			<Path
				d="M148.1,61.86l-76-44.75a8,8,0,0,0-11,2.83l-12,20.34a8,8,0,0,0,2.84,11l152.1,89.52a8,8,0,0,1,2.84,11l-12,20.34a8,8,0,0,1-11,2.83l-76-44.75"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M93.86,75.9l-44.75,76a8,8,0,0,0,2.83,11l20.34,12a8,8,0,0,0,11-2.84L172.76,20a8,8,0,0,1,11-2.84l20.34,12a8,8,0,0,1,2.83,11l-44.75,76"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="32"
				y1="232"
				x2="224"
				y2="232"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="166.36"
				y1="164.55"
				x2="176"
				y2="232"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="90.27"
				y1="160.11"
				x2="80"
				y2="232"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "WindmillDuotone";

export const WindmillDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
