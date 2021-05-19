import {FC} from "react";
import AcidBasePropertyProps from "./AcidBasePropertyProps";
import when from "../../utils/when";

export const AcidBaseProperty: FC<AcidBasePropertyProps> = ({color = "#000", secondaryColor, stroke = 0, ...props}) =>
<svg viewBox="0 0 16 16" {...props}>
	<g stroke="#000" stroke-width={stroke}>
		<clipPath id="base">
			<circle cx="8" cy="8" r={8 - stroke/2}/>
		</clipPath>
		<g clip-path="url(#base)">
			<path fill={color} d="M0 0v16h16v-16z"/>
			{ when(secondaryColor !== undefined, <path fill={secondaryColor} d="M8 0v16h16v-16"/>) }
		</g>
		<circle cx="8" cy="8" r="7.75" fill="none"/>
	</g>
</svg>

export default AcidBaseProperty;