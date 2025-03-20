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
				d="M200,40H56A16,16,0,0,0,40,56V200a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V56A16,16,0,0,0,200,40Z"
				opacity="0.2"
			/>
			<Path
				d="M88,40,46.63,81.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L78.63,177.37a22.62,22.62,0,0,0,0,32h0a22.62,22.62,0,0,0,32,0l66.74-66.74a22.62,22.62,0,0,1,32,0h0a22.62,22.62,0,0,1,0,32L200,184a22.62,22.62,0,0,0,0,32h0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "ScribbleDuotone";

export const ScribbleDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
