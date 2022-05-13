import React, {useCallback, useState} from 'react';
import './App.css';
import {useCDPQueue} from "./shared/hooks/useCDPQueue";
import debounce from 'lodash.debounce';
import {collateralTypes} from "./shared/constants";
import {sortCDPsByClosestId} from "./shared/utils";

function App() {
    const {setQuery, query, CDPData, collateralType, setCollateralType, progress} = useCDPQueue();
    const [state, setState] = useState<string>('');

    const debouncedSetQuery = useCallback(
        debounce((val: string) => {
        setQuery(val)
    }, 300), [setQuery]);

    const handleSetQuery = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
        setState(value);
        debouncedSetQuery(value);
    };

    const handleCollateralChange = ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => {
        setCollateralType(value as CollateralTypes)
    }

    return (
        <div className="App">
            <select defaultValue={collateralType} onChange={handleCollateralChange}>
                {collateralTypes.map(type => <option value={type}>{type}</option>)}
                <option value=''>Any</option>
            </select>
            <input type='number' value={state} onChange={handleSetQuery}/>
            <progress value={progress}/>
            {sortCDPsByClosestId(CDPData || [], +query).map(data => <CDP data={data}/>)}
        </div>
    );

}

const CDP = ({data} : {data: FormattedCDP})  => {
    return <p>
        {Object.entries(data).map(([key, value]) => <><strong>{key}</strong>: <span>{value}</span><br/></>)}
    </p>
}

export default App;
