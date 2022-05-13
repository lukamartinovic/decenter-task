import {CDP} from "../CDP/CDP";
import React from "react";
import style from './CDPResults.module.scss';

export const CDPResults = ({data}: { data: FormattedCDP[] }) => {
    return <ul className={style.results}>
        {data.map(data => <CDP data={data}/>)}
    </ul>
}