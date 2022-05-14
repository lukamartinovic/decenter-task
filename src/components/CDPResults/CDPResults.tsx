import React from "react";
import {CDP} from "components";
import style from './CDPResults.module.scss';

type CDPResultsProps = {
    data: FormattedCDP[],
    setSelectedCDP: React.Dispatch<React.SetStateAction<FormattedCDP | null>>
}

const CDPResults = ({data, setSelectedCDP}: CDPResultsProps) => {
    if(data.length === 0) return null;

    return <table className={style.results}>
        <tr>
            <th>ID</th>
            <th>Collateral</th>
            <th>Debt</th>
            <th>Owner</th>
            <th>User</th>
        </tr>
        {data.map(data => <CDP setSelectedCDP={setSelectedCDP} key={data.id} data={data}/>)}
    </table>
}

export default CDPResults;