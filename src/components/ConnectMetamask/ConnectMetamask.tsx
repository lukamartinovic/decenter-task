import React from "react";
import style from "./ConnectMetamask.module.scss";
import {ReactComponent as MetaMaskLogo} from 'assets/MetaMask_Fox.svg';

const ConnectMetamask = ({injectMetamask, connectingMetamask}: { injectMetamask: () => void, connectingMetamask: boolean }) => {

    const handleMetamaskConnect = () => {
        injectMetamask()
    }

    return<div className={style.connect}>
        <main>
            <MetaMaskLogo/>
            {window.ethereum ? <button onClick={handleMetamaskConnect} disabled={connectingMetamask}>Connect metamask</button> : <span>Please install Metamask to continue</span>}
        </main>
        </div>
}

export default ConnectMetamask;