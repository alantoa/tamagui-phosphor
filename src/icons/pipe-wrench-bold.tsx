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
				d="M74.14,230.14a20,20,0,0,1-28.28-28.28L113.72,134,73.86,94.14a20,20,0,0,1,28.28-28.28l63.36,60.5a8,8,0,0,1,.16,11.45Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M81.88,102.16l-23.54,23.5a8,8,0,0,0,0,11.31l26.2,26.2"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M143.6,105.44l23.3-23.1a8,8,0,0,1,11.25-.06L195.6,97.66a8,8,0,0,0,11.31,0l3.72-3.72a32,32,0,0,0,0-45.25l-33-30.35a8,8,0,0,0-11.32,0L110.63,73.78"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
		</Svg>
	);
};

Icon.displayName = "PipeWrenchBold";

export const PipeWrenchBold: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
