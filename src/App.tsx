import React, {useState} from 'react';
import './App.css';
import {useCDPQueue} from "./shared/hooks/useCDPQueue";

function App() {
    const {query, setQuery, CDPData} = useCDPQueue();
    const [state, setState] = useState<string>('');

    return (
        <div className="App">
            <input type='text' value={state} onChange={e => setState(e.target.value)}/>
            <button onClick={() => setQuery(state)} type='button'>Search</button>
            {JSON.stringify(CDPData)}
        </div>
    );

}

export default App;
