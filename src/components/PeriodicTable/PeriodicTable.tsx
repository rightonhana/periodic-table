import React, { FC, useState } from 'react';
import { ElementsData } from '../../types/ElementsData';
import ElementInfo from '../ElementInfo';
import Table from '../Table';
import { elementsData } from '../../const/elementsData';

export const PeriodicTable: FC<{}> = () => {
    const [state, setState] = useState<ElementsData>(elementsData[0]);

    const setInfo = (element: ElementsData) => setState(element);

    return (<div>
        <ElementInfo element={state}/>
        <Table width={10} height={10} onElementClick={setInfo} />
    </div>)
}

export default PeriodicTable;
