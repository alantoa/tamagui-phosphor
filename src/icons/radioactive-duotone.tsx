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
			<_Circle cx="128" cy="128" r="12" />
			<Path
				d="M92,128a36,36,0,0,1,17.77-31L83.82,52a8,8,0,0,0-11.55-2.54A95.94,95.94,0,0,0,32,119.14,8.1,8.1,0,0,0,40,128Z"
				opacity="0.2"
			/>
			<Path
				d="M110,159.18a36,36,0,0,0,36,0l25.83,44.73a8,8,0,0,1-3.56,11.26,96.24,96.24,0,0,1-80.54,0,8,8,0,0,1-3.56-11.26Z"
				opacity="0.2"
			/>
			<Path
				d="M164,128c0-.62,0-1.23-.05-1.85A36,36,0,0,0,146.23,97l26-44.94a8,8,0,0,1,11.55-2.54A95.94,95.94,0,0,1,224,119.14a8.1,8.1,0,0,1-8,8.86Z"
				opacity="0.2"
			/>
			<Path
				d="M109.77,97,83.82,52a8,8,0,0,0-11.55-2.54A95.94,95.94,0,0,0,32,119.14,8.1,8.1,0,0,0,40,128H92"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M146.23,97l26-44.94a8,8,0,0,1,11.55-2.54A95.94,95.94,0,0,1,224,119.14a8.1,8.1,0,0,1-8,8.86H164"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M146,159.18l25.83,44.73a8,8,0,0,1-3.56,11.26,96.24,96.24,0,0,1-80.54,0,8,8,0,0,1-3.56-11.26L110,159.18"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "RadioactiveDuotone";

export const RadioactiveDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
