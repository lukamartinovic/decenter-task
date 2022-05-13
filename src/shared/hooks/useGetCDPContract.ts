import {useEffect, useRef, useState} from "react";
import {Contract, ethers} from "ethers";
import {abi, contractAddress} from "../constants";

const useGetCDPContract = () => {
    const [initialized, setInitialized] = useState<boolean>(false);
    const contractRef = useRef<Contract | null>(null);

    useEffect(() => {
        (async () => {
            let provider = new ethers.providers.Web3Provider(window.ethereum as any);
                try {
                    let contract = new ethers.Contract(contractAddress, abi, provider.getSigner());
                    setInitialized(true);
                    contractRef.current = contract;
                } catch (e) {
                    console.error(e)
                }
        })()
    });

    return {contractRef, initialized};

}

export default useGetCDPContract;