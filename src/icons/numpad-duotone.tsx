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
				d="M64,48H192a0,0,0,0,1,0,0V200a16,16,0,0,1-16,16H80a16,16,0,0,1-16-16V48A0,0,0,0,1,64,48Z"
				opacity="0.2"
			/>
			<_Circle cx="64" cy="48" r="16" />
			<_Circle cx="128" cy="48" r="16" />
			<_Circle cx="192" cy="48" r="16" />
			<_Circle cx="64" cy="104" r="16" />
			<_Circle cx="128" cy="104" r="16" />
			<_Circle cx="192" cy="104" r="16" />
			<_Circle cx="64" cy="160" r="16" />
			<_Circle cx="128" cy="160" r="16" />
			<_Circle cx="128" cy="216" r="16" />
			<_Circle cx="192" cy="160" r="16" />
		</Svg>
	);
};

Icon.displayName = "NumpadDuotone";

export const NumpadDuotone: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
