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
			<Path d="M239.76,158.06,217.28,68.12A16,16,0,0,0,201.75,56H136V40a16,16,0,0,0-16-16H80A16,16,0,0,0,64,40V56H54.25A16,16,0,0,0,38.72,68.12L16.24,158.06A7.93,7.93,0,0,0,16,160v32a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V160A7.93,7.93,0,0,0,239.76,158.06ZM168,88h16a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16Zm0,32h16a8,8,0,0,1,0,16H168a8,8,0,0,1,0-16ZM136,88a8,8,0,0,1,0,16H120a8,8,0,0,1,0-16Zm8,40a8,8,0,0,1-8,8H120a8,8,0,0,1,0-16h16A8,8,0,0,1,144,128ZM80,40h40V56H80ZM72,88H88a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Zm0,32H88a8,8,0,0,1,0,16H72a8,8,0,0,1,0-16Zm152,72H32V168H224Z" />
		</Svg>
	);
};

Icon.displayName = "CashRegisterFill";

export const CashRegisterFill: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
