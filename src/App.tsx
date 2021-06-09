import Navigation from "./components/Navigation/Navigation";
import Table from "./components/Table";
import usePeriodicTable from "./hooks/periodicTable.hook";

export const App = () => {
	const {
		elementShowing,
		extendedPT,
		showCategory,
		periodicElements,
		setElementShowing,
		onClickExtendedPT,
		onCategoryClick
	} = usePeriodicTable();

	return (
		<div>
			<Navigation extendedPT={extendedPT} onExtendedPTClick={onClickExtendedPT} onNavClick={onCategoryClick}/>
			<Table
				elements={periodicElements}
				extended={extendedPT}
				width={10}
				height={10}
				currentCategory={showCategory}
				elementShowing={elementShowing}
				onElementClick={setElementShowing}
			/>
		</div>
	);
};

export default App;
