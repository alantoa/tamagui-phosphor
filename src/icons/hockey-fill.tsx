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
			<Path d="M149.9,122.82l68-80a8,8,0,0,1,12.2,10.36l-68,80a8,8,0,1,1-12.2-10.36ZM240,168v32a16,16,0,0,1-16,16H171.7a16,16,0,0,1-12.19-5.64L25.9,53.18h0A8,8,0,1,1,38.1,42.82L130.9,152H224A16,16,0,0,1,240,168Zm-16,0H208v32h16ZM115.3,183.06a4,4,0,0,1,0,5.18L96.49,210.36A16,16,0,0,1,84.3,216H32a16,16,0,0,1-16-16V168a16,16,0,0,1,16-16H87.05a4,4,0,0,1,3,1.41ZM48,168H32v32H48Z" />
		</Svg>
	);
};

Icon.displayName = "HockeyFill";

export const HockeyFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
