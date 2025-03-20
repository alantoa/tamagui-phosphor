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
				d="M224,88H157.13L135.61,21.68a7.94,7.94,0,0,0-15.22,0L98.87,88H32a8,8,0,0,0-4.71,14.47l54.21,39-20.77,64a8,8,0,0,0,12.31,8.95L128,174.91l54.94,39.53a8,8,0,0,0,12.31-8.95l-20.77-64,54.21-39A8,8,0,0,0,224,88Z"
				opacity="0.2"
			/>
			<Path
				d="M60.75,205.49a8,8,0,0,0,12.31,8.95l155.63-112A8,8,0,0,0,224,88H32a8,8,0,0,0-4.71,14.47l155.63,112a8,8,0,0,0,12.31-8.95L135.61,21.68a7.94,7.94,0,0,0-15.22,0Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "PentagramDuotone";

export const PentagramDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
