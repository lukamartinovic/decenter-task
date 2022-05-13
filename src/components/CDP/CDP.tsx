import React from "react";
import {formatEther} from "ethers/lib/utils";
import {Address} from "../shared/Address";

export const CDP = ({data}: { data: FormattedCDP }) => {
    return <tr>
        <td>
            <strong>{data.id}</strong>
        </td>
        <td>
            <span>{Number(formatEther(data.collateral)).toLocaleString()} <small>{data.collateralType}</small></span>
        </td>
        <td>
            <span>{Number(formatEther(data.debt)).toLocaleString()} <small>DAI</small></span>
        </td>
        <td>
            <Address address={data.owner} />
        </td>
        <td>
            <Address address={data.userAddr}/>
        </td>
    </tr>
}

