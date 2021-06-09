import {HTMLAttributes} from "react";
import ElementCategories from "../../enums/ElementCategories";

export interface HexagonProps extends HTMLAttributes<HTMLButtonElement> {
	color: string;
	name: string;
	currentCategory: ElementCategories | undefined;
}

export default HexagonProps;