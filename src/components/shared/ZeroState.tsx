import React from "react";
import style from './ZeroState.module.scss';
import {FaRegFolderOpen} from "react-icons/fa";

const ZeroState = () => {
    return <div className={style.zeroState}>
        <span>No results found</span>
        <FaRegFolderOpen/>
    </div>
}

export default ZeroState;