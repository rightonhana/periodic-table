import {FC} from "react";
import ElementProps from "./ElementProps";
import Hexagon from "../Hexagon";
import styles from "./Element.module.css";

export const Element: FC<ElementProps> = ({
	name,
	symbol,
	atomicNumber,
	color,
	currentCategory,
	...props
}) => {
	
	return (
	<Hexagon color={color} name={name} currentCategory={currentCategory} {...props}>
		<div className={styles.AtomicNumber}>{atomicNumber}</div>
		<div className={styles.Symbol}>{symbol}</div>
	</Hexagon>
);
	}
export default Element;