import ElementData from "../../types/ElementData";

export interface TableProps {
    width: number;
    height: number;
    onElementClick: (element: ElementData) => void;
}

export default TableProps;