import React, {useCallback, useState} from 'react';
import './App.module.scss';
import {useCDPQueue} from "./shared/hooks/useCDPQueue";
import debounce from 'lodash/debounce';
import {collateralTypes} from "./shared/constants";
import {sortCDPsByClosestId} from "./shared/utils";
import {CDPResults} from "./components/CDPResults/CDPResults";
import style from './App.module.scss';
import ProgressBar from "./components/shared/ProgressBar";

function App() {
    const {setQuery, query, CDPData, collateralType, setCollateralType, progress, isSearching} = useCDPQueue();
    const [state, setState] = useState<string>('');

    const noResults = query && CDPData.length === 0 && progress >= 1;

    const debouncedSetQuery = useCallback(
        debounce((val: string) => {
        setQuery(val)
    }, 350), [setQuery]);

    const handleSetQuery = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
        setState(value);
        debouncedSetQuery(value);
    };

    const handleCollateralChange = ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => {
        setCollateralType(value as CollateralTypes)
    }

    const data = sortCDPsByClosestId(CDPData, +query);

    return (
        <div className={style.app}>
            <header>
                <h3>
                    MakerDAO CDP Search
                </h3>
            </header>
            <main>
                <nav>
                    <label>
                        Collateral type
                        <select defaultValue={collateralType} onChange={handleCollateralChange}>
                            {collateralTypes.map(type => <option value={type}>{type}</option>)}
                            <option value=''>Any</option>
                        </select>
                    </label>
                    <label>
                        CDP ID
                        <input type='number' value={state} onChange={handleSetQuery}/>
                    </label>
                </nav>
                <section>
                    {isSearching && <ProgressBar progress={progress}/>}
                    <CDPResults data={data} />
                    {noResults && <span>No results</span>}
                </section>
            </main>
        </div>
    );
}

export default App;
