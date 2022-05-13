import detectEthereumProvider from "@metamask/detect-provider";
import {Web3Provider} from "@ethersproject/providers";
import {useEffect, useLayoutEffect, useState} from "react";

export const useInjectMetamask = () => {
    const [metamaskConnected, setMetamaskConnected] = useState<boolean>(false);

    useLayoutEffect(() => {(async () => {
        const provider = await detectEthereumProvider() as Web3Provider;
        provider.on('accountsChanged', (accounts) => {setMetamaskConnected(accounts.length > 0)})
    })()
    }, [])

    const injectMetamask = async () => {
        const provider = await detectEthereumProvider() as Web3Provider;
        provider.send('eth_requestAccounts', [])
            .then(err => {
                if (err.result?.length > 0)
                    setMetamaskConnected(true)
            })
    }

    return {injectMetamask, metamaskConnected, setMetamaskConnected};

}