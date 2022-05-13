import React from "react";
import style from './CDP.module.scss'
import {formatEther} from "ethers/lib/utils";

export const CDP = ({data}: { data: FormattedCDP }) => {
    return <tr>
        <td>
            <strong>ID: {data.id}</strong>
        </td>
        <td>
            <span>{Number(formatEther(data.collateral)).toLocaleString()} <small>{data.collateralType}</small></span>
        </td>
        <td>
            <span>{Number(formatEther(data.debt)).toLocaleString()} <small>DAI</small></span>
        </td>
        <td>
            <a href={`https://etherscan.io/address/${data.owner}`} target='_blank'>{data.owner.slice(0,5)}...{data.owner.slice(-5)}</a>
        </td>
        <td>
            <a href={`https://etherscan.io/address/${data.userAddr}`} target='_blank'>{data.userAddr.slice(0,5)}...{data.userAddr.slice(-5)}</a>
        </td>
    </tr>
}