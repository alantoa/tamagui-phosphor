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
				d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z"
				opacity="0.2"
			/>
			<Path
				d="M151.75,158.5C175.83,142.16,224,142.16,224,93.16c0-65.34-104.36-81.67-152.53-32.67C25.78,107,55.41,232,87.52,232S121.88,178.76,151.75,158.5Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="16"
			/>
		</Svg>
	);
};

Icon.displayName = "PatreonLogoDuotone";

export const PatreonLogoDuotone: NamedExoticComponent<IconProps> =
	memo<IconProps>(themed(Icon));
