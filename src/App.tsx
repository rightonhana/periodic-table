import { MouseEvent, useState } from "react";
import ElementInfo from "./components/ElementInfo";
import Table from "./components/Table";
import ElementData from "./types/ElementData";
import styles from "./App.module.css";
import elements from "./elements";
import when from "./utils/when";
import ElementCategories from "./enums/ElementCategories";
import orderPeriodicTable from "./utils/orderPeriodicTable";

export const App = () => {
	const [elementShowing, setElementShowing] = useState<ElementData>();
	const [extendedPT, setExtendedPT] = useState<boolean>(false);
	const [showCategory, setShowCategory] = useState<ElementCategories>();
	const [periodicElements, setPeriodicElements] = useState<ElementData[]>(elements);

	const showExtendedTable = () => {
		setPeriodicElements(elements);
	}

	const showNormalTable = () => {
		setPeriodicElements(orderPeriodicTable(elements));
	}

	

	//-------------------------------------------------------------------------
	const setElement = (element: ElementData) => setElementShowing(element);

	const onClickExtendedPT = (event: MouseEvent) => {
		setExtendedPT(!extendedPT);
		extendedPT ? showExtendedTable() : showNormalTable();
	}

	const onCategoryClick = (category: ElementCategories) => (event: MouseEvent) => {
		setShowCategory(category);
	}

	return (<>
		<nav className={styles.Navigation}>
			<ul>
				<button className={extendedPT ? styles.EPTButton : ""} onClick={onClickExtendedPT}>Extended Periodic Table</button>
			</ul>
			<ul>
				<button onClick={onCategoryClick(ElementCategories.ACTINIDE)}>actinide</button>
				<button onClick={onCategoryClick(ElementCategories.ALKALI_METAL)}>alkali</button>
				<button onClick={onCategoryClick(ElementCategories.ALKALINE_EARTH_METAL)}>alkaline</button>
				<button onClick={onCategoryClick(ElementCategories.LANTHANIDE)}>lan­thanide</button>
				<button onClick={onCategoryClick(ElementCategories.METALLOID)}>metalloid</button>
				<button onClick={onCategoryClick(ElementCategories.NOBLE_GAS)}>noble gas</button>
				<button onClick={onCategoryClick(ElementCategories.POST_TRANSITION_METAL)}>post transition metal</button>
				<button onClick={onCategoryClick(ElementCategories.REACTIVE_NONMETAL)}>reactive nonmetal</button>
				<button onClick={onCategoryClick(ElementCategories.TRANSITION_METAL)}>transitionMetal</button>
				<button onClick={onCategoryClick(ElementCategories.UNKNOWN)}>unknown</button>
			</ul>
		</nav>
		<div className={styles.Container}>
			<section className={styles.PeriodicTable}>
				<Table elements={periodicElements} extended={extendedPT} width={10} height={10} onElementClick={setElement} />
			</section>
			<section className={styles.ElementData}>
				{when(
					elementShowing !== undefined,
					<ElementInfo element={elementShowing ? elementShowing : elements[0]}/>
				)}
			</section>
		</div>
		</>);
};

export default App;
