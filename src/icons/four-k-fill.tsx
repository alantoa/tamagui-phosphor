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
			<Path d="M79.55,136,96,113v23ZM232,56V200a16,16,0,0,1-16,16H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216A16,16,0,0,1,232,56ZM124,144a8,8,0,0,0-8-8h-4V88a8,8,0,0,0-14.51-4.65l-40,56A8,8,0,0,0,64,152H96v16a8,8,0,0,0,16,0V152h4A8,8,0,0,0,124,144Zm49.59-22.23,24.48-28.56a8,8,0,0,0-12.14-10.42L157.8,115.6s0,0,0,0L152,122.37V88a8,8,0,0,0-16,0v80a8,8,0,0,0,16,0V147l10.62-12.39,22.52,37.55a8,8,0,1,0,13.72-8.24Z" />
		</Svg>
	);
};

Icon.displayName = "FourKFill";

export const FourKFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
