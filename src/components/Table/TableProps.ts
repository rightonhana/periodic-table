import { ElementsData } from "../../types/ElementsData";

export interface TableProps {
    width: number;
    height: number;
    onElementClick: (element: ElementsData) => void;
}

export default TableProps;