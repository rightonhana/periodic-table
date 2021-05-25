import ElementCategories from "../enums/ElementCategories";
import ElementData from "../types/ElementData";

export const filterActinides = (elements: ElementData[]) =>
	elements.filter(({elementCategory, atomicNumber}) => elementCategory === ElementCategories.ACTINIDE && atomicNumber !== 89);

export default filterActinides;