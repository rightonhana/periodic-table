import ElementCategories from "../enums/ElementCategories";
import ElementData from "../types/ElementData";
import filterActinides from "./filterActinides";
import filterLanthanides from "./filterLanthanides";

export const orderPeriodicTable = (elements: ElementData[]): ElementData[] => {
	const others = elements.filter(
		({elementCategory, atomicNumber}) => 
			!(elementCategory === ElementCategories.LANTHANIDE && atomicNumber === 57)
			&& !(elementCategory !== ElementCategories.ACTINIDE && atomicNumber === 89)
		);
	return [...others, ...filterLanthanides(elements), ...filterActinides(elements)];
};

export default orderPeriodicTable;