import React from 'react';
import Table from './components/Table';
import ElementInfo from './components/ElementInfo';

export const App = () => <div>
        <ElementInfo  name={"helium"} symbol={"w"} atomicNumber={2}/>
        <Table width={10} height={10}/>
    </div>

export default App;
