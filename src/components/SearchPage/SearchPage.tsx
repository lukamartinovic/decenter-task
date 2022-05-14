import {useCDPQueue} from "../../shared/hooks/useCDPQueue";
import React, {useCallback, useState} from "react";
import debounce from "lodash/debounce";
import {sortCDPsByClosestId} from "../../shared/utils";
import style from "./SearchPage.module.scss";
import {collateralTypes} from "../../shared/constants";
import {FaSearch, FaSpinner} from "react-icons/fa";
import ProgressBar from "../shared/ProgressBar";
import {CDPResults} from "../CDPResults/CDPResults";
import {ZeroState} from "../shared/ZeroState";
import CDPDetails from "../CDPDetails/CDPDetails";

const SearchPage = () => {
    const {setQuery, query, CDPData, collateralType, setCollateralType, progress, isSearching} = useCDPQueue();
    const [state, setState] = useState<string>('');
    const [selectedCDP, setSelectedCDP] = useState<FormattedCDP | null>(null)
    const noResults = query && CDPData.length === 0 && progress >= 1;

    const debouncedSetQuery = useCallback(
        debounce((val: string) => {
            setQuery(val)
        }, 350), [setQuery]);


    const handleSetQuery = ({target: {value}}: React.ChangeEvent<HTMLInputElement>) => {
        if(value.length > 15)
            value = value.slice(0, 15)
        if(+value <= 0)
            value = '';
        setState(value);
        debouncedSetQuery(value);
    };

    const handleCollateralChange = ({target: {value}}: React.ChangeEvent<HTMLSelectElement>) => {
        setCollateralType(value as CollateralTypes)
    }

    const data = sortCDPsByClosestId(CDPData, +query);

    return (
        <>
            {selectedCDP && <CDPDetails CDP={selectedCDP} setSelectedCDP={setSelectedCDP}/>}
        <div className={style.searchPage}>
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
                            <option value=''>Any</option>
                            {collateralTypes.map(type => <option key={type} value={type}>{type}</option>)}
                        </select>
                    </label>
                    <label>
                        CDP ID
                        <input min={0} maxLength={15} type='number' value={state} onChange={handleSetQuery}/>
                        {isSearching ? <FaSpinner className={style.spinner}/> : <FaSearch/>}
                    </label>
                    {isSearching && <ProgressBar progress={progress}/>}
                </nav>
                <section>
                    <CDPResults setSelectedCDP={setSelectedCDP} data={data}/>
                    {noResults && <ZeroState />}
                </section>
            </main>
        </div>
        </>
    );
}

export default SearchPage;