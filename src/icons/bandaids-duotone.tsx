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
				d="M206.63,94.63a32,32,0,0,0-45.26-45.26L128,82.75,173.25,128Z"
				opacity="0.2"
			/>
			<Path
				d="M49.37,161.37a32,32,0,0,0,45.26,45.26L128,173.25,82.75,128Z"
				opacity="0.2"
			/>
			<Path
				d="M94.63,49.37A32,32,0,0,0,49.37,94.63L82.75,128,128,82.75Z"
				opacity="0.2"
			/>
			<Path
				d="M173.25,128,128,173.25l33.37,33.38a32,32,0,0,0,45.26-45.26Z"
				opacity="0.2"
			/>
			<Path
				d="M49.37,94.63A32,32,0,0,1,94.63,49.37l112,112a32,32,0,0,1-45.26,45.26Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M161.37,49.37a32,32,0,0,1,45.26,45.26l-112,112a32,32,0,0,1-45.26-45.26Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle
				cx="128"
				cy="128"
				r="4"
				fill="none"
				stroke={color}
				opacity="0.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<_Circle cx="128" cy="128" r="12" />
		</Svg>
	);
};

Icon.displayName = "BandaidsDuotone";

export const BandaidsDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
