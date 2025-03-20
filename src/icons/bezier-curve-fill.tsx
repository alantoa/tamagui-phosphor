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
			<Path d="M221,144.4A96.26,96.26,0,0,0,181,88h59a8,8,0,0,0,0-16H159a32,32,0,0,0-62,0H16a8,8,0,0,0,0,16H75A96.26,96.26,0,0,0,35,144.4,32,32,0,1,0,71,184H185a32,32,0,1,0,36-39.6ZM40,192a16,16,0,1,1,16-16A16,16,0,0,1,40,192ZM128,64a16,16,0,1,1-16,16A16,16,0,0,1,128,64Zm88,128a16,16,0,1,1,16-16A16,16,0,0,1,216,192Z" />
		</Svg>
	);
};

Icon.displayName = "BezierCurveFill";

export const BezierCurveFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
