import {CDP} from "../CDP/CDP";
import React from "react";
import style from './CDPResults.module.scss';

export const CDPResults = ({data}: { data: FormattedCDP[] }) => {
    if(data.length === 0) return null;

    return <table className={style.results}>
        <tr>
            <th>ID</th>
            <th>Collateral</th>
            <th>Debt</th>
            <th>Owner</th>
            <th>User</th>
        </tr>
        {data.map(data => <CDP key={data.id} data={data}/>)}
    </table>
}