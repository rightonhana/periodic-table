import ElementCategories from "../../enums/ElementCategories";
import ElementData from "../../types/ElementData";

export interface TableProps {
	width: number;
	height: number;
	elements: ElementData[];
	extended: boolean;
	currentCategory: ElementCategories | undefined;
	elementShowing: ElementData | undefined;
	onElementClick: (element: ElementData) => void;
}

export default TableProps;