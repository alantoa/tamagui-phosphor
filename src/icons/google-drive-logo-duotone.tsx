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
				d="M55.12,206.8A7.91,7.91,0,0,1,52.38,204L25.05,156.15A8,8,0,0,1,24,152H88Z"
				opacity="0.2"
			/>
			<Path
				d="M232,152a8,8,0,0,1-1.05,4.15L203.62,204a7.91,7.91,0,0,1-2.74,2.83L168,152Z"
				opacity="0.2"
			/>
			<Path
				d="M96.59,33a8.06,8.06,0,0,1,3.84-1h55.14a8.06,8.06,0,0,1,3.84,1L128,85.33Z"
				opacity="0.2"
			/>
			<Path
				d="M93.65,35.76A8,8,0,0,1,100.43,32h55.14a8,8,0,0,1,6.78,3.76l68.43,112.18a8,8,0,0,1,.17,8.21L203.62,204a8,8,0,0,1-6.94,4H59.32a8,8,0,0,1-6.94-4L25.05,156.15a8,8,0,0,1,.17-8.21Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="55.12"
				y1="206.8"
				x2="159.41"
				y2="32.98"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="200.88"
				y1="206.8"
				x2="96.59"
				y2="32.98"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="24"
				y1="152"
				x2="232"
				y2="152"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "GoogleDriveLogoDuotone";

export const GoogleDriveLogoDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
