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
			<Path d="M44,120H212.07a4,4,0,0,0,4-4V88a8,8,0,0,0-2.34-5.66l-56-56A8,8,0,0,0,152.05,24H56A16,16,0,0,0,40,40v76A4,4,0,0,0,44,120Zm108-76,44,44h-44ZM52,144H36a8,8,0,0,0-8,8v56a8,8,0,0,0,8,8H51.33C71,216,87.55,200.52,88,180.87A36,36,0,0,0,52,144Zm-.49,56H44V160h8a20,20,0,0,1,20,20.77C71.59,191.59,62.35,200,51.52,200Zm170.67-4.28a8.26,8.26,0,0,1-.73,11.09,30,30,0,0,1-21.4,9.19c-17.65,0-32-16.15-32-36s14.36-36,32-36a30,30,0,0,1,21.4,9.19,8.26,8.26,0,0,1,.73,11.09,8,8,0,0,1-11.9.38A14.21,14.21,0,0,0,200.06,160c-8.82,0-16,9-16,20s7.18,20,16,20a14.25,14.25,0,0,0,10.23-4.66A8,8,0,0,1,222.19,195.72ZM128,144c-17.65,0-32,16.15-32,36s14.37,36,32,36,32-16.15,32-36S145.69,144,128,144Zm0,56c-8.83,0-16-9-16-20s7.18-20,16-20,16,9,16,20S136.86,200,128,200Z" />
		</Svg>
	);
};

Icon.displayName = "FileDocFill";

export const FileDocFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
