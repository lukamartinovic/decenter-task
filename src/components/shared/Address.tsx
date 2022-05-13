import {FaRegCopy} from "react-icons/fa";
import React from "react";
import style from './Address.module.scss';

export const Address = ({address}: { address: string }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(address)
    }

    return <div className={style.address}>
        <a href={`https://etherscan.io/address/${address}`} title={address}
           target='_blank'>{address.slice(0, 6)}...{address.slice(-6)}</a>
        <button>
            <FaRegCopy onClick={handleCopy}/>
        </button>
    </div>
}