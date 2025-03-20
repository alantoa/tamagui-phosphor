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
			<_Circle cx="128" cy="128" r="32" opacity="0.2" />
			<Path d="M240,64H200a48.85,48.85,0,0,0,40,40Z" opacity="0.2" />
			<Path d="M240,192V152a48.85,48.85,0,0,0-40,40Z" opacity="0.2" />
			<Path d="M16,192V152a48.85,48.85,0,0,1,40,40Z" opacity="0.2" />
			<Path d="M16,64v40A48.85,48.85,0,0,0,56,64Z" opacity="0.2" />
			<_Circle
				cx="128"
				cy="128"
				r="32"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Rect
				x="16"
				y="64"
				width="224"
				height="128"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M240,104a48.85,48.85,0,0,1-40-40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M200,192a48.85,48.85,0,0,1,40-40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M16,152a48.85,48.85,0,0,1,40,40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M56,64a48.85,48.85,0,0,1-40,40"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "MoneyDuotone";

export const MoneyDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
