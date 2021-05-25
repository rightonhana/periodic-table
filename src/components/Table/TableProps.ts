import ElementData from "../../types/ElementData";

export interface TableProps {
	width: number;
	height: number;
	elements: ElementData[];
	extended: boolean;
	onElementClick: (element: ElementData) => void;
}

export default TableProps;