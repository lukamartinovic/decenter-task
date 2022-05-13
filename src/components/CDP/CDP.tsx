import React from "react";
import {formatEther} from "ethers/lib/utils";
import {Address} from "../shared/Address";
import {useRateContract} from "../../shared/hooks/useRateContract";
import {getTotalDebt} from "../../shared/utils";

export const CDP = ({data}: { data: FormattedCDP }) => {
    const {rates} = useRateContract(data.collateralType);

    const rate = rates.find(rate => rate.collateralType === data.collateralType);

    if(!rate) return null;

    return <tr>
        <td>
            <strong>{data.id}</strong>
        </td>
        <td>
            <span>{Number(formatEther(data.collateral)).toLocaleString()} <small>{data.collateralType}</small></span>
        </td>
        <td>
            <span>{Number(getTotalDebt(data.debt.toString(), rate.rate.toString())).toLocaleString()} <small>DAI</small></span>
        </td>
        <td>
            <Address address={data.owner} />
        </td>
        <td>
            <Address address={data.userAddr}/>
        </td>
    </tr>
}

