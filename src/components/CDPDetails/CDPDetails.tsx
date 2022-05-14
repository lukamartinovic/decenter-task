import style from './CDPDetails.module.scss';
import React from "react";
import {formatEther} from "ethers/lib/utils";
import {getExtraCDPDetails} from "../../shared/utils";
import {Address} from "../shared/Address";
import {useRateContract} from "../../shared/hooks/useRateContract";
import {AiOutlineClose} from "react-icons/ai";
import {FaExclamation} from "react-icons/fa";
import {collateralPrices} from "../../shared/constants";
import modalStyles from '../../shared/styles.module.scss'


type CDPDetailsProps = {
    CDP: FormattedCDP,
    setSelectedCDP: React.Dispatch<React.SetStateAction<FormattedCDP | null>>
}

const CDPDetails = ({CDP, setSelectedCDP}: CDPDetailsProps) => {

    const {rate} = useRateContract(CDP.collateralType);

    if (!rate) return <></>;

    const extraCDPDetails = getExtraCDPDetails(CDP, rate.rate, collateralPrices)

    const {
        ratio,
        liquidationRatio,
        maxCollateralDraw,
        liquidated,
        maxDebtBeforeLiqudation,
        totalDebt
    } = extraCDPDetails

    return <>
        <div className={modalStyles.backdrop}/>
        <dialog open={true} className={`${modalStyles.modal} ${style.CDPDetails}`}>
            <header className={modalStyles.modalHeader}>
                <div>CDP {CDP?.id} Details</div>
                <button onClick={() => setSelectedCDP(null)}><AiOutlineClose/></button>
            </header>
            {!!CDP && <main>
                <div>
                    <small>Collateral</small>
                    <span>{Number(formatEther(CDP.collateral)).toLocaleString()}
                        <small> {CDP.collateralType}</small></span>
                </div>
                <div>
                    <small>Debt</small>
                    <span>{Number(totalDebt).toLocaleString()} <small>DAI</small></span>
                </div>
                <div>
                    <small>Owner</small>
                    <Address truncate={false} address={CDP.owner}/>
                </div>
                <div>
                    <small>User</small>
                    <Address truncate={false} address={CDP.userAddr}/>
                </div>
                <div>
                    <small>Liquidation ratio</small>
                    <span>{liquidationRatio}%</span>
                </div>
                <div>
                    <small>Ratio {liquidated && <FaExclamation color={'red'}/>}</small>
                    <span>{`${isNaN(+ratio) ? '0' : ratio}%`}</span>
                </div>
                <div>
                    <small>Max debt before liquidation</small>
                    <span>{liquidated ? 0 : maxDebtBeforeLiqudation}<small> DAI</small></span>
                </div>
                <div>
                    <small>Max collateral draw before liquidation</small>
                    <span>{liquidated ? 0 : maxCollateralDraw}<small> {CDP.collateralType}</small></span>
                </div>
            </main>}
        </dialog>
    </>
}

export default CDPDetails;