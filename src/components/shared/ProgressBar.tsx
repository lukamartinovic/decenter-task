import React from "react";
import style from "./ProgressBar.module.scss";

const ProgressBar = ({ progress }: { progress: number }) => {
    return (
        <div className={style.progressBar}>
            <progress value={progress} />
        </div>
    );
};

export default ProgressBar;
