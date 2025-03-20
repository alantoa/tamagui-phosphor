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
			<Path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM201.23,170.26c-5.63,9-14.33,13.74-25.16,13.74-20.73,0-34.81-25.31-49.72-52.11C115.47,112.33,101.93,88,90.61,88,78.18,88,64,116.88,64,142.21c0,8.26,1.5,15,4.34,19.56C71,166,74.68,168,79.93,168c6.08,0,13.52-7,22.74-21.51a8,8,0,0,1,13.49,8.59C99.84,180.71,88.22,184,79.93,184c-10.83,0-19.53-4.75-25.16-13.74-4.43-7.08-6.77-16.78-6.77-28A103.13,103.13,0,0,1,59,97.06C67.34,80.9,78.57,72,90.61,72c20.73,0,34.81,25.31,49.72,52.11C151.21,143.66,164.75,168,176.07,168c5.25,0,8.93-2,11.59-6.23,2.84-4.53,4.34-11.3,4.34-19.56C192,116.88,177.82,88,165.39,88c-3.4,0-7.35,2.31-11.74,6.88a8,8,0,1,1-11.54-11.09C149.74,75.86,157.35,72,165.39,72c12,0,23.27,8.9,31.62,25.06a103.13,103.13,0,0,1,11,45.15C208,153.48,205.66,163.18,201.23,170.26Z" />
		</Svg>
	);
};

Icon.displayName = "MetaLogoFill";

export const MetaLogoFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
