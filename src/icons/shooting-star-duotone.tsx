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
				d="M164,129.66l35.78,21.53a5.46,5.46,0,0,0,8.19-5.86l-9.73-40.19,31.84-26.88A5.38,5.38,0,0,0,227,68.78l-41.79-3.31-16.1-38.14a5.51,5.51,0,0,0-10.12,0l-16.1,38.14-41.79,3.31a5.38,5.38,0,0,0-3.13,9.48l31.84,26.88L120,145.33a5.46,5.46,0,0,0,8.19,5.86Z"
				opacity="0.2"
			/>
			<Path
				d="M164,129.66l35.78,21.53a5.46,5.46,0,0,0,8.19-5.86l-9.73-40.19,31.84-26.88A5.38,5.38,0,0,0,227,68.78l-41.79-3.31-16.1-38.14a5.51,5.51,0,0,0-10.12,0l-16.1,38.14-41.79,3.31a5.38,5.38,0,0,0-3.13,9.48l31.84,26.88L120,145.33a5.46,5.46,0,0,0,8.19,5.86Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="82.45"
				y1="117.55"
				x2="24"
				y2="176"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="93.26"
				y1="178.74"
				x2="40"
				y2="232"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="166.28"
				y1="177.72"
				x2="112"
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

Icon.displayName = "ShootingStarDuotone";

export const ShootingStarDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
