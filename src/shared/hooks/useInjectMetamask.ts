import detectEthereumProvider from "@metamask/detect-provider";
import {Web3Provider} from "@ethersproject/providers";
import {useLayoutEffect, useState} from "react";

export const useInjectMetamask = () => {
    const [metamaskConnected, setMetamaskConnected] = useState<boolean>(false);
    const [connectingMetamask, setConnectingMetmask] = useState<boolean>(false);

    useLayoutEffect(() => {(async () => {
        const provider = await detectEthereumProvider() as Web3Provider;
        provider.on('accountsChanged', (accounts) => {setMetamaskConnected(accounts.length > 0)})
    })()
    }, [])

    const injectMetamask = async () => {
        setConnectingMetmask(true);
        const provider = await detectEthereumProvider() as Web3Provider;
        provider.send('eth_requestAccounts', [])
            .then(err => {
                setConnectingMetmask(false);
                if (err.result?.length > 0)
                    setMetamaskConnected(true)
            })
    }

    return {injectMetamask, metamaskConnected, setMetamaskConnected, connectingMetamask};

}