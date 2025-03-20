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
				d="M26.34,128.88,55,157.54a8,8,0,0,0,11.37-.06L127.29,95a24,24,0,0,1,33.61-.33c9.69,9.34,9.46,25.14-.05,34.65L98.54,189.6a8,8,0,0,0-.08,11.4l28.66,28.66a8,8,0,0,0,11.26.05l61.74-60.43c31.19-31.19,32.1-82,1.14-113.42a80,80,0,0,0-113.57-.43L26.31,117.6A8,8,0,0,0,26.34,128.88Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Line
				x1="128.57"
				y1="160.57"
				x2="168.36"
				y2="200.36"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Line
				x1="55.77"
				y1="87.77"
				x2="95.56"
				y2="127.56"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
		</Svg>
	);
};

Icon.displayName = "MagnetThin";

export const MagnetThin: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
