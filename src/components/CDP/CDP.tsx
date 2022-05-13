import React from "react";
import style from './CDP.module.scss'
import {formatEther} from "ethers/lib/utils";

export const CDP = ({data}: { data: FormattedCDP }) => {
    return <section className={style.cdp}>
        <header>
            <strong>ID: {data.id}</strong>
        </header>
        <div>
            <strong>Collateral</strong>
            <span>{Number(formatEther(data.collateral)).toLocaleString()} <strong>{data.collateralType}</strong></span>
        </div>
        <div>
            <strong>Debt</strong>
            <span>{Number(formatEther(data.debt)).toLocaleString()} <strong>DAI</strong></span>
        </div>
        <div>
            <strong>Owner</strong>
            <span>{data.owner}</span>
        </div>
    </section>
}