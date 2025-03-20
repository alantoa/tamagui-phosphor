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
			<Path d="M71.22,190.47a108.88,108.88,0,0,1-33.84,9.16,4,4,0,0,1-3.89-2c-8.67-15.28-11.52-34.29-8-55.15,4.49-26.92,19.09-53.87,41.12-75.9s49-36.63,75.9-41.12c22.79-3.79,43.37,0,59.29,10.6a4,4,0,0,1-1.25,7.23,121,121,0,0,0-21.82,7.46c-21.77,9.9-49.6,31.06-58.52,75.7C114.1,156.73,97.63,178.27,71.22,190.47ZM222.51,58.38a4,4,0,0,0-3.88-2,108.5,108.5,0,0,0-33.85,9.16c-26.41,12.2-42.88,33.74-48.94,64-8.93,44.64-36.75,65.8-58.52,75.7a121,121,0,0,1-21.82,7.46A4,4,0,0,0,54.27,220c11.87,7.92,26.32,12,42.35,12a103.66,103.66,0,0,0,16.92-1.44c26.91-4.49,53.87-19.09,75.9-41.12s36.63-49,41.12-75.9C234,92.68,231.18,73.66,222.51,58.38Z" />
		</Svg>
	);
};

Icon.displayName = "CoffeeBeanFill";

export const CoffeeBeanFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
