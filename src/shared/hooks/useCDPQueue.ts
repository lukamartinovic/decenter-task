import useContract from "./useContract";
import {useEffect, useState} from "react";
import PQueue from "p-queue";
import {formatCDPData, getCDPIds} from "../utils";
import {utils} from "ethers";
import {formatEther} from "ethers/lib/utils";

const concurrentSearches = 5;
const maxSearchResults = 20;

export const useCDPQueue = () => {
    const [query, setQuery] = useState<string>('');
    const [progress, setProgress] = useState<number>(0);
    const [isSearching, setIsSearching] = useState<boolean>(false);
    const [collateralType, setCollateralType] = useState<'' | CollateralTypes>('');
    const [CDPData, setCDPData] = useState<FormattedCDP[]>([]);

    const {contractRef, initialized} = useContract();

    useEffect(() => {
        if(query && initialized) {
            setIsSearching(true);
            setCDPData([]);
            setProgress(0);
            const contract = contractRef.current;

            let CDPIds = getCDPIds(+query, maxSearchResults);

            const getContractPromise = (input: string) => async () => {
                const CDP = await contract?.getCdpInfo(input);
                return ({...CDP, id: input});
            }

            const inputPromises = CDPIds.map(getContractPromise)
            const queue = new PQueue({concurrency: concurrentSearches});

            queue.on('completed', data => {
                const matchesCollateralType = utils.parseBytes32String(data.ilk) === collateralType || collateralType === '';

                setProgress((prevProgress => prevProgress + (1 / maxSearchResults)))
                const parsedCollateralType = utils.parseBytes32String(data.ilk);

                if(!parsedCollateralType)
                    return;
                if(matchesCollateralType)
                    setCDPData(prevState => [...(prevState || []), formatCDPData(data)]);
            })

            queue.on('idle', () => setIsSearching(false))

            queue.addAll(inputPromises);
        }
    }, [initialized, query, collateralType, contractRef])

    return {setQuery, setCollateralType, query, collateralType, CDPData, progress, isSearching}
}