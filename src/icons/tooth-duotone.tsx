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
				d="M40,79.76C39.93,151.18,63.48,208,84,222.54a8,8,0,0,0,12.52-6C98,196.31,104,160,128,160s30,36.31,31.51,56.53a8,8,0,0,0,12.52,6c20.49-14.55,44-71.36,44-142.78A47.94,47.94,0,0,0,168,32H88A47.94,47.94,0,0,0,40,79.76Z"
				opacity="0.2"
			/>
			<Line
				x1="88"
				y1="64"
				x2="168"
				y2="96"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="168"
				y1="64"
				x2="88"
				y2="96"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M40,79.76C39.93,151.18,63.48,208,84,222.54a8,8,0,0,0,12.52-6C98,196.31,104,160,128,160s30,36.31,31.51,56.53a8,8,0,0,0,12.52,6c20.49-14.55,44-71.36,44-142.78A47.94,47.94,0,0,0,168,32H88A47.94,47.94,0,0,0,40,79.76Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "ToothDuotone";

export const ToothDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
