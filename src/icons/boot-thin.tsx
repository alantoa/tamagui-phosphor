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
				x1="152"
				y1="120"
				x2="112"
				y2="120"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Line
				x1="152"
				y1="88"
				x2="112"
				y2="88"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M240,168v32a8,8,0,0,1-8,8H205.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H169.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H121.89a8.08,8.08,0,0,1-3.58-.84l-12.62-6.32a8.08,8.08,0,0,0-3.58-.84H85.89a8.08,8.08,0,0,0-3.58.84l-12.62,6.32a8.08,8.08,0,0,1-3.58.84H40a8,8,0,0,1-8-8V168c9.22-32.06,12-88.65,0-120H144a8,8,0,0,1,8,8v64h40A48,48,0,0,1,240,168Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Line
				x1="32"
				y1="168"
				x2="240"
				y2="168"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
		</Svg>
	);
};

Icon.displayName = "BootThin";

export const BootThin: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
