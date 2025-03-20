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
			<_Circle cx="128" cy="40" r="24" opacity="0.2" />
			<Path
				d="M149.17,80a24,24,0,0,1,18,8.13l45.32,51.38a12,12,0,0,1-17,17L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128,60.49,156.49a12,12,0,0,1-17-17L88.83,88.13a24,24,0,0,1,18-8.13Z"
				opacity="0.2"
			/>
			<_Circle
				cx="128"
				cy="40"
				r="24"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M149.17,80a24,24,0,0,1,18,8.13l45.32,51.38a12,12,0,0,1-17,17L160,128l22.87,86.93a12,12,0,0,1-21.75,10.14L128,168,94.88,225.07a12,12,0,0,1-21.75-10.14L96,128,60.49,156.49a12,12,0,0,1-17-17L88.83,88.13a24,24,0,0,1,18-8.13Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "PersonDuotone";

export const PersonDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
