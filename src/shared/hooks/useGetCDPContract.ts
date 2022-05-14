import { useEffect, useRef } from "react";
import { Contract, ethers } from "ethers";
import { getCDPABI, getCDPAddress } from "../constants";

const useGetCDPContract = () => {
    const contractRef = useRef<Contract | null>(null);

    useEffect(() => {
        (async () => {
            let provider = new ethers.providers.Web3Provider(
                window.ethereum as any
            );
            try {
                let contract = new ethers.Contract(
                    getCDPAddress,
                    getCDPABI,
                    provider.getSigner()
                );
                contractRef.current = contract;
            } catch (e) {
                console.error(e);
            }
        })();
    });

    return { contractRef };
};

export default useGetCDPContract;
