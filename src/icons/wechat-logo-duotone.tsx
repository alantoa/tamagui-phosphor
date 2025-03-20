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
				d="M88,152a72,72,0,0,1,72-72c1.32,0,2.63,0,3.94.11h0A72,72,0,1,0,32.5,138l-8.16,27.76a8,8,0,0,0,9.93,9.93L62,167.5a71.53,71.53,0,0,0,30,8.39h0A71.83,71.83,0,0,1,88,152Z"
				opacity="0.2"
			/>
			<_Circle cx="132" cy="140" r="12" />
			<_Circle cx="188" cy="140" r="12" />
			<Path
				d="M160,224a72,72,0,1,1,63.5-38l8.16,27.76a8,8,0,0,1-9.93,9.93L194,215.5A71.75,71.75,0,0,1,160,224Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
			<Path
				d="M92.06,175.89a71.53,71.53,0,0,1-30-8.39l-27.76,8.16a8,8,0,0,1-9.93-9.93L32.5,138A72,72,0,1,1,163.94,80.11"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "WechatLogoDuotone";

export const WechatLogoDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
