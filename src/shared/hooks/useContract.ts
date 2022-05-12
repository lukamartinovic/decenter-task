import {useEffect, useRef, useState} from "react";
import detectEthereumProvider from "@metamask/detect-provider";
import {Contract, ethers} from "ethers";
import {abi, contractAddress} from "../constants";
import {Web3Provider} from "@ethersproject/providers";

const useContract = () => {
    const [initialized, setInitialized] = useState<boolean>(false);
    const contractRef = useRef<Contract | null>(null);

    useEffect(() => {
        (async () => {
            if (typeof window.ethereum !== 'undefined') {
                const provider = await detectEthereumProvider() as Web3Provider;
                provider.send && await provider.send('eth_requestAccounts', [])

                try {
                    let ethersProvider = new ethers.providers.Web3Provider(provider as any);
                    let contract = new ethers.Contract(contractAddress, abi, ethersProvider.getSigner());
                    setInitialized(true);
                    contractRef.current = contract;
                } catch (e) {
                    console.error(e)
                }
            }
        })()
    });

    return {contractRef, initialized};

}

export default useContract;