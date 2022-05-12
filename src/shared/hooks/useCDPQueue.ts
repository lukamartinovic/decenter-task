import useContract from "./useContract";
import {useEffect, useState} from "react";
import PQueue from "p-queue";
import {getCDPIds} from "../utils";
import {BigNumber, utils} from "ethers";

const concurrentSearches = 5;

interface CDP {
    collateral: BigNumber,
    debt: BigNumber,
    ilk: string,
    owner: string,
    urn: string,
    userAddr: string
}

interface FormattedCDP {
    collateral: string,
    debt: string,
    collateralType: string,
    owner: string,
    userAddr: string
}

const formatCDPData = ({collateral, debt, ilk, urn, owner, userAddr}: CDP): FormattedCDP => {
    return ({
        collateral: collateral.toString(),
        debt: debt.toString(),
        collateralType: utils.parseBytes32String(ilk),
        owner,
        userAddr
    })
}

export const useCDPQueue = () => {
    const [query, setQuery] = useState<string>('');
    const [CDPData, setCDPData] = useState<FormattedCDP[]>();

    const {contractRef, initialized} = useContract();

    useEffect(() => {
        if(query && initialized) {
            setCDPData([]);
            const contract = contractRef.current;
            const inputPromises = getCDPIds(query).map(input => () => contract?.getCdpInfo(input))
            const queue = new PQueue({concurrency: concurrentSearches});
            queue.addAll(inputPromises);

            queue.on('completed', data => {
                console.log(data);
                setCDPData(prevState => [...(prevState || []), formatCDPData(data)]);
            })
        }
    }, [initialized, query])

    return {setQuery, query, CDPData}
}