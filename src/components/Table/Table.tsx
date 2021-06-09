import {FC} from "react";
import Element from "../Element";
import TableProps from "./TableProps";
import ElementData from "../../types/ElementData";
import styles from "./Table.module.css";
import CategoryColors from "../../enums/CategoryColors";
import ElementInfo from "../ElementInfo";

export const Table: FC<TableProps> = ({width = 0, height = 0, elements, extended, currentCategory, elementShowing, onElementClick, ...props}) => {
	const elementsToRender= elements.map((element: ElementData, index) => <Element
		tabIndex={element.atomicNumber}
		key={index}
		atomicNumber={element.atomicNumber}
		name={element.name} symbol={element.symbol}
		color={CategoryColors[element.elementCategory]}
		currentCategory={element.elementCategory === currentCategory ? currentCategory : undefined}
		onClick={() => onElementClick(element)}
		/>
	);

	return (
		<div className={extended ? styles.ExtendedTable : styles.Table}>
			{
				elementShowing !== undefined
					? elementsToRender.splice(1,0, <ElementInfo element={elementShowing ? elementShowing : elements[0]}/>)
					: elementsToRender
			}
		</div>
	)
}

export default Table;