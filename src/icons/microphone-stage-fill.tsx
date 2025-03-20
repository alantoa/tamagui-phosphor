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
			<Path d="M115.06,46.36a4,4,0,0,0-6.11.54A71.54,71.54,0,0,0,96,88a73.29,73.29,0,0,0,.63,9.42L27.12,192.22A15.93,15.93,0,0,0,28.71,213L43,227.29a15.93,15.93,0,0,0,20.78,1.59l94.81-69.53A73.29,73.29,0,0,0,168,160a71.54,71.54,0,0,0,41.09-12.93,4,4,0,0,0,.54-6.11Zm2.61,103.28-16,16a8,8,0,1,1-11.31-11.31l16-16a8,8,0,0,1,11.31,11.31Zm109.4-20.56a4,4,0,0,1-6.12.54L126.38,35.05a4,4,0,0,1,.54-6.12A71.93,71.93,0,0,1,227.07,129.08Z" />
		</Svg>
	);
};

Icon.displayName = "MicrophoneStageFill";

export const MicrophoneStageFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
