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
			<_Circle cx="84" cy="164" r="8" />
			<Path
				d="M120,200a8,8,0,0,0,7.81-9.74l-15.62-52.52A8,8,0,0,1,120,128h96v-4a92,92,0,0,0-93.31-92C72.65,32.71,32,73.92,32,124a91.91,91.91,0,0,0,40.14,76Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
			<Path
				d="M148,128l24.31,82.27A8,8,0,0,0,180,216h36a8,8,0,0,0,8-8V176a8,8,0,0,0-8-8H121.19"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="8"
			/>
		</Svg>
	);
};

Icon.displayName = "FootballHelmetThin";

export const FootballHelmetThin: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
