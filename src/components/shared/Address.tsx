import {FaRegCopy} from "react-icons/fa";
import React from "react";
import style from './Address.module.scss';

export const Address = ({address, truncate = true}: { address: string, truncate?: boolean }) => {
    const handleCopy = () => {
        navigator.clipboard.writeText(address)
    }

    const addressString = truncate ? `${address.slice(0, 6)}...${address.slice(-6)}` : address;

    return <div className={style.address}>
        <a href={`https://etherscan.io/address/${address}`} title={address}
           target='_blank'>{addressString}</a>
        <button>
            <FaRegCopy onClick={handleCopy}/>
        </button>
    </div>
}