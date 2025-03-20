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
				d="M168,129.48c17.76,4.91,36.1,3.75,56-13.48V56c-19.89,17.23-38.24,18.39-56,13.48Z"
				opacity="0.2"
			/>
			<Path
				d="M104,162.52c21.62,6,42.38,21,64,27v-60c-21.63-6-42.38-21-64-27Z"
				opacity="0.2"
			/>
			<Path
				d="M48,116c19.89-17.23,38.24-18.39,56-13.48v-60C86.24,37.61,67.89,38.77,48,56Z"
				opacity="0.2"
			/>
			<Line
				x1="168"
				y1="69.48"
				x2="168"
				y2="189.48"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M48,116c64-55.43,112,55.43,176,0"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="104"
				y1="42.52"
				x2="104"
				y2="162.52"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M48,176c64-55.43,112,55.43,176,0V56C160,111.43,112,.57,48,56V224"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "FlagCheckeredDuotone";

export const FlagCheckeredDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
