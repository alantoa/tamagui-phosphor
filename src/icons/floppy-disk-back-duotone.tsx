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
				d="M208,40H176V80a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8V40.73a8,8,0,0,0-2.34,1.61L42.34,77.66A8,8,0,0,0,40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48A8,8,0,0,0,208,40ZM128,184a32,32,0,1,1,32-32A32,32,0,0,1,128,184Z"
				opacity="0.2"
			/>
			<Path
				d="M40,83.31V208a8,8,0,0,0,8,8H208a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H83.31a8,8,0,0,0-5.65,2.34L42.34,77.66A8,8,0,0,0,40,83.31Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle
				cx="128"
				cy="152"
				r="32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M80,40.72V80a8,8,0,0,0,8,8h80a8,8,0,0,0,8-8V40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "FloppyDiskBackDuotone";

export const FloppyDiskBackDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
