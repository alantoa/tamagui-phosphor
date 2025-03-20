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
			<Path d="M207.06,80.67c-.74-.74-1.49-1.46-2.24-2.17l24.84-24.84a8,8,0,0,0-11.32-11.32l-26,26a111.43,111.43,0,0,0-128.55.19L37.66,42.34A8,8,0,0,0,26.34,53.66L51.4,78.72A113.38,113.38,0,0,0,16,161.13V184a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A111.25,111.25,0,0,0,207.06,80.67ZM92,160a12,12,0,1,1,12-12A12,12,0,0,1,92,160Zm72,0a12,12,0,1,1,12-12A12,12,0,0,1,164,160Z" />
		</Svg>
	);
};

Icon.displayName = "AndroidLogoFill";

export const AndroidLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
