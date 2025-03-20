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
			<Path d="M16,100V72A16,16,0,0,1,32,56h84a4,4,0,0,1,4,4v76H64a32,32,0,0,0-32-32H20A4,4,0,0,1,16,100Zm208,4h12a4,4,0,0,0,4-4V72a16,16,0,0,0-16-16H140a4,4,0,0,0-4,4v76h56A32,32,0,0,1,224,104Zm8,16h-8a16,16,0,0,0-16,16v8a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8v-8a16,16,0,0,0-16-16H24A16,16,0,0,0,8,136v32a16,16,0,0,0,16,16h8v15.73A8.18,8.18,0,0,0,39.47,208,8,8,0,0,0,48,200V184H208v15.73a8.17,8.17,0,0,0,7.47,8.25,8,8,0,0,0,8.53-8V184h8a16,16,0,0,0,16-16V136A16,16,0,0,0,232,120Z" />
		</Svg>
	);
};

Icon.displayName = "CouchFill";

export const CouchFill: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
