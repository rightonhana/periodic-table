import ElementCategories from "../enums/ElementCategories";
import ElementData from "../types/ElementData";
import filterActinides from "./filterActinides";
import filterLanthanides from "./filterLanthanides";

export const orderPeriodicTable = (elements: ElementData[]): ElementData[] => {
	const others = elements
		.filter(({elementCategory, atomicNumber}) => 
			atomicNumber === 57 || elementCategory !== ElementCategories.LANTHANIDE
		)
		.filter(({elementCategory, atomicNumber}) => 
			atomicNumber === 89 || elementCategory !== ElementCategories.ACTINIDE
		);
	return [...others, ...filterLanthanides(elements), ...filterActinides(elements)];
};

export default orderPeriodicTable;