import React from "react";
import {formatEther} from "ethers/lib/utils";
import {Address} from "../shared/Address";
import {useRateContract} from "../../shared/hooks/useRateContract";

export const CDP = ({data}: { data: FormattedCDP }) => {
    const {rates} = useRateContract(data.collateralType);

    const rate = rates.find(rate => rate.collateralType === data.collateralType);

    if(!rate) return null;

    const debt = rate.rate * Number(formatEther(data.debt));

    return <tr>
        <td>
            <strong>{data.id}</strong>
        </td>
        <td>
            <span>{Number(formatEther(data.collateral)).toLocaleString()} <small>{data.collateralType}</small></span>
        </td>
        <td>
            <span>{debt.toLocaleString()} <small>DAI</small></span>
        </td>
        <td>
            <Address address={data.owner} />
        </td>
        <td>
            <Address address={data.userAddr}/>
        </td>
    </tr>
}

