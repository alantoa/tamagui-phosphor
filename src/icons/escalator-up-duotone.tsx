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
				d="M32,208H88l96-104h40a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H168L72,152H32a8,8,0,0,0-8,8v40A8,8,0,0,0,32,208Z"
				opacity="0.2"
			/>
			<Path
				d="M32,208H88l96-104h40a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H168L72,152H32a8,8,0,0,0-8,8v40A8,8,0,0,0,32,208Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Polyline
				points="176 176 200 152 224 176"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Line
				x1="200"
				y1="152"
				x2="200"
				y2="208"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "EscalatorUpDuotone";

export const EscalatorUpDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
