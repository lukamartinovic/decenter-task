import {useEffect, useState} from "react";
import {ethers} from "ethers";
import {getRateABI, getRateAddress} from "../constants";
import {formatBytes32String} from "ethers/lib/utils";
import {bigNumberToPercentage} from "../utils";

export const useRateContract = (collateralType: string) => {
    const [rates, setRates] = useState<{rate: number, collateralType: string}[]>([])
    const [gettingRates, setGettingRates] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            if(rates.find(rate => rate.collateralType === collateralType) || !collateralType) return;

            let provider = new ethers.providers.Web3Provider(window.ethereum as any);
            try {
                setGettingRates(true);
                let contract = new ethers.Contract(getRateAddress, getRateABI, provider.getSigner());
                const data = await contract.ilks(formatBytes32String(collateralType))
                const rate = bigNumberToPercentage(data.rate);
                setRates((prevRates) => [...prevRates, {collateralType, rate}])
                setGettingRates(false);
            } catch (e) {
                console.error(e)
            }
        })()
    }, [collateralType, rates])

    return {rates, gettingRates};

}

