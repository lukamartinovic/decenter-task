import React from "react";
import {Address} from "components/shared";
import {AiOutlineProfile} from "react-icons/ai";
import {useRateContract} from "shared/hooks/useRateContract";
import {formatEther} from "ethers/lib/utils";
import {getTotalDebt} from "shared/utils";
import style from './CDP.module.scss';

type CDPProps = {
    data: FormattedCDP,
    setSelectedCDP: React.Dispatch<React.SetStateAction<FormattedCDP | null>>
}

const CDP = ({data, setSelectedCDP}: CDPProps) => {
    const {rate} = useRateContract(data.collateralType);

    if(!rate) return null;

    return <tr>
        <td>
            <div className={style.id}>
                <strong>{data.id}</strong>
                <button onClick={() => setSelectedCDP(data)}><AiOutlineProfile /></button>
            </div>
        </td>
        <td>
            <span>{Number(formatEther(data.collateral)).toLocaleString()} <small>{data.collateralType}</small></span>
        </td>
        <td>
            <span>{Number(getTotalDebt(data.debt.toString(), rate.rate)).toLocaleString()} <small>DAI</small></span>
        </td>
        <td>
            <Address address={data.owner} />
        </td>
        <td>
            <Address address={data.userAddr}/>
        </td>
    </tr>
}

export default CDP;
