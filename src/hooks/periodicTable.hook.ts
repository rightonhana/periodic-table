import { MouseEvent, useState } from "react";
import ElementCategories from "../enums/ElementCategories";
import ElementData from "../types/ElementData";
import elements from "../elements";
import orderPeriodicTable from "../utils/orderPeriodicTable";

export const usePeriodicTable = () => {
	const [elementShowing, setElementShowing] = useState<ElementData>();
	const [extendedPT, setExtendedPT] = useState<boolean>(false);
	const [showCategory, setShowCategory] = useState<ElementCategories>();

	const onClickExtendedPT = (event: MouseEvent) => {
		setExtendedPT(!extendedPT);
	}

	const onCategoryClick = (category: ElementCategories) => (event: MouseEvent) => {
		setShowCategory(category);
	}

	return {
		elementShowing,
		extendedPT,
		showCategory,
		periodicElements: extendedPT ? elements : orderPeriodicTable(elements),
		setElementShowing,
		onClickExtendedPT,
		onCategoryClick
	};
}

export default usePeriodicTable;