import React from "react";
import { useInjectMetamask } from "shared/hooks/useInjectMetamask";
import { ConnectMetamask, SearchPage } from "components";
import "./components/SearchPage/SearchPage.module.scss";

function App() {
    const injectMetmaskProps = useInjectMetamask();

    return injectMetmaskProps.metamaskConnected ? (
        <SearchPage />
    ) : (
        <ConnectMetamask {...injectMetmaskProps} />
    );
}

export default App;
