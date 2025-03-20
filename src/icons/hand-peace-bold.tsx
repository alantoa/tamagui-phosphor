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
				d="M72,131.6a20,20,0,0,1,8-39.19l20.81,4a20,20,0,1,1-8,39.19Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M56,152.72V160a72,72,0,0,0,72.55,72c39.7-.3,71.45-33.2,71.45-72.9v-3.34a48,48,0,0,0-38.59-47.07L140,104.41a20,20,0,0,0-8,39.19l15.37,3.07A28,28,0,0,0,152,179.6"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M72,172.32a20,20,0,0,1,8-39.19l10,2a20,20,0,0,1-8,39.2Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M101.37,96.53,88.69,49.18a20,20,0,1,1,38.63-10.35l17.85,66.61"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M150.54,106.51l18.14-67.68a20,20,0,0,1,38.63,10.35l-19.88,74.19"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
		</Svg>
	);
};

Icon.displayName = "HandPeaceBold";

export const HandPeaceBold: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
