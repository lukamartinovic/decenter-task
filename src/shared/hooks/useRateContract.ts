import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { getRateABI, getRateAddress } from "../constants";
import { formatBytes32String } from "ethers/lib/utils";

type Rate = {
    collateralType: string;
    rate: string;
};

export const useRateContract = (collateralType: string) => {
    const [rate, setRate] = useState<Rate | null>(null);
    const [gettingRates, setGettingRates] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            setGettingRates(true);

            const cachedRates = JSON.parse(
                sessionStorage.getItem("rates") || "[]"
            );
            const cachedRate = cachedRates.find(
                (rate: Rate) => rate.collateralType === collateralType
            );

            if (cachedRate) {
                setRate(cachedRate);
                setGettingRates(false);
                return;
            }

            let provider = new ethers.providers.Web3Provider(
                window.ethereum as any
            );
            try {
                let contract = new ethers.Contract(
                    getRateAddress,
                    getRateABI,
                    provider.getSigner()
                );
                const data = await contract.ilks(
                    formatBytes32String(collateralType)
                );
                const rate = data.rate;

                const rateToSave = { rate: rate.toString(), collateralType };

                sessionStorage.setItem(
                    "rates",
                    JSON.stringify([...cachedRates, rateToSave])
                );
                setRate(rateToSave);
            } catch (e) {
                console.error(e);
            }
            setGettingRates(false);
        })();
    }, [collateralType]);

    return { rate, gettingRates };
};
