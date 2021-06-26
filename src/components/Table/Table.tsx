import {FC} from "react";
import Element from "../Element";
import TableProps from "./TableProps";
import ElementData from "../../types/ElementData";
import styles from "./Table.module.css";
import CategoryColors from "../../enums/CategoryColors";
import ElementInfo from "../ElementInfo";
import cx from 'classnames'

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

	const elementsWithInfo = elementsToRender.splice(1,0, <ElementInfo key={"element-data"} element={elementShowing ? elementShowing : elements[0]}/>);

	const classes = cx({
		[styles.ExtendedTable]: extended,
		[styles.Table]: !extended,
		[styles.ElementInfo]: elementShowing !== undefined
	});
	return (
		<div className={classes}>
			{
				elementShowing !== undefined
					? elementsWithInfo
					: elementsToRender
			}
		</div>
	)
}

export default Table;