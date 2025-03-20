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
			<_Circle cx="100" cy="164" r="8" />
			<_Circle cx="156" cy="164" r="8" />
			<Polyline
				points="144 200 128 213.31 112 200"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M146.56,98.73C152.16,72.39,167,16,190.94,16c28.22,0,18.27,65.06-6.91,113"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M109.44,98.73C103.84,72.39,89,16,65.06,16,36.84,16,46.79,81.06,72,129"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M191.71,153.82A44,44,0,1,1,128,213.3a44,44,0,1,1-63.71-59.48,64,64,0,0,1,127.42,0Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
		</Svg>
	);
};

Icon.displayName = "RabbitThin";

export const RabbitThin: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
