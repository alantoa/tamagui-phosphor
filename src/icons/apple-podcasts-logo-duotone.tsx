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
			<_Circle cx="128" cy="120" r="24" opacity="0.2" />
			<Path
				d="M131.56,224h-7.12a16.2,16.2,0,0,1-15.76-12.12l-12.19-48A16.06,16.06,0,0,1,112.25,144h31.5a16.06,16.06,0,0,1,15.76,19.88l-12.19,48A16.2,16.2,0,0,1,131.56,224Z"
				opacity="0.2"
			/>
			<_Circle
				cx="128"
				cy="120"
				r="24"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M131.56,224h-7.12a16.2,16.2,0,0,1-15.76-12.12l-12.19-48A16.06,16.06,0,0,1,112.25,144h31.5a16.06,16.06,0,0,1,15.76,19.88l-12.19,48A16.2,16.2,0,0,1,131.56,224Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M66.33,145.18a64,64,0,1,1,123.34,0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M74.63,207.81a96,96,0,1,1,106.74,0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "ApplePodcastsLogoDuotone";

export const ApplePodcastsLogoDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
