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
				d="M59.86,100.62C72.49,95.21,95.2,91.4,128,108c35.86,18.16,59.67,11.89,71.42,5.84h0a55.69,55.69,0,0,1-16.94,48.65,79.76,79.76,0,0,1-109,0A55.86,55.86,0,0,1,58.3,105.93l1.57-5.31Z"
				opacity="0.2"
			/>
			<Line
				x1="128"
				y1="184"
				x2="128"
				y2="240"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="88"
				y1="240"
				x2="168"
				y2="240"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M80.09,32h95.82l21.79,73.93a55.84,55.84,0,0,1-15.22,56.56,79.76,79.76,0,0,1-109,0A55.86,55.86,0,0,1,58.3,105.93Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M59.86,100.62C72.49,95.21,95.2,91.4,128,108c35.86,18.16,59.67,11.89,71.42,5.84"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "WineDuotone";

export const WineDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
