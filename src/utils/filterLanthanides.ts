import ElementCategories from "../enums/ElementCategories";
import ElementData from "../types/ElementData";

export const filterLanthanides = (elements: ElementData[]) =>
	elements.filter(({elementCategory, atomicNumber}) => elementCategory === ElementCategories.LANTHANIDE && atomicNumber !== 57);

export default filterLanthanides;