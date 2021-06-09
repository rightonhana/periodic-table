import { MouseEvent } from "react";
import ElementCategories from "../../enums/ElementCategories";

export interface NavigationProps {
	extendedPT: boolean;
	onExtendedPTClick: (event: MouseEvent) => void;
	onNavClick: (category: ElementCategories) => (event: MouseEvent) => void;
}

export default NavigationProps;