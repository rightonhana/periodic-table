import CategoryColors from "../../enums/CategoryColors";
import ElementCategories from "../../enums/ElementCategories";
import HexagonProps from "../Hexagon/HexagonProps";

export interface ElementProps extends HexagonProps {
	name: string;
	symbol: string;
	atomicNumber: number;
	color: CategoryColors;
	currentCategory: ElementCategories | undefined;
}

export default ElementProps;