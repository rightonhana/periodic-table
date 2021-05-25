import {FC} from "react";
import Element from "../Element";
import TableProps from "./TableProps";
import ElementData from "../../types/ElementData";
import styles from "./Table.module.css";

export const Table: FC<TableProps> = ({width = 0, height = 0, elements, extended, onElementClick, ...props}) => {

	return (
		<div className={extended ? styles.ExtendedTable : styles.Table}>
			{elements.map((element: ElementData, index) => <Element
			tabIndex={element.atomicNumber}
			key={index}
			atomicNumber={element.atomicNumber}
			name={element.name} symbol={element.symbol}
			color={"--actinide"}
			onClick={() => onElementClick(element)}
			/>)}
		</div>
	)
}

export default Table;