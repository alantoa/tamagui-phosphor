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
				d="M144,128a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,144,32H84a8,8,0,0,0-7.76,6.06l-36,144A8,8,0,0,0,48,192H79.51a8,8,0,0,0,7.76-6.06l13-51.88A8,8,0,0,1,108,128Z"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
			<Path
				d="M87.27,185.94l-7,28.12A8,8,0,0,0,88,224h31.51a8,8,0,0,0,7.76-6.06l9-35.88A8,8,0,0,1,144,176h32a48,48,0,0,0,46.56-36.36h0A48,48,0,0,0,176,80H120a8,8,0,0,0-7.76,6.06l-12,48"
				fill="none"
				stroke={color}
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="24"
			/>
		</Svg>
	);
};

Icon.displayName = "PaypalLogoBold";

export const PaypalLogoBold: NamedExoticComponent<IconProps> = memo<IconProps>(
	themed(Icon),
);
