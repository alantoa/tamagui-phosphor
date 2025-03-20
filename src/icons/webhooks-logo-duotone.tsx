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
			<_Circle cx="128" cy="64" r="40" opacity="0.2" />
			<_Circle cx="192" cy="168" r="40" opacity="0.2" />
			<_Circle cx="64" cy="168" r="40" opacity="0.2" />
			<_Circle cx="192" cy="168" r="16" />
			<_Circle cx="128" cy="64" r="16" />
			<_Circle cx="64" cy="168" r="16" />
			<Path
				d="M32,144a40,40,0,1,0,72,24h88"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M164.66,48A40,40,0,1,0,107,98.07L64,168"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M192,208a40,40,0,1,0-21-74.07L128,64"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "WebhooksLogoDuotone";

export const WebhooksLogoDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
