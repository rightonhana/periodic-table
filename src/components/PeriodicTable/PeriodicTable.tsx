import { FC, useState } from 'react';
import ElementData from '../../types/ElementData';
import ElementInfo from '../ElementInfo';
import Table from '../Table';
import when from "../../utils/when";
import { elementsData } from '../../const/elementsData';

export const PeriodicTable: FC<{}> = () => {
	const [elementShowing, setElementShowing] = useState<ElementData>();
	const setElement = (element: ElementData) => setElementShowing(element);

	return (<div>
		<Table width={10} height={10} onElementClick={setElement} />
		{ when(
			elementShowing !== undefined,
			<ElementInfo element={elementShowing ? elementShowing: elementsData[0]}/>)
		}
	</div>)
}

export default PeriodicTable;
