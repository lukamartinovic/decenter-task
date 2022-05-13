import React from 'react';
import './components/SearchPage/SearchPage.module.scss';
import {useInjectMetamask} from "./shared/hooks/useInjectMetamask";
import {ConnectMetamask} from "./components/ConnectMetamask/ConnectMetamask";
import SearchPage from "./components/SearchPage/SearchPage";

function App() {
    const injectMetmaskProps = useInjectMetamask();

    return injectMetmaskProps.metamaskConnected ?
        <SearchPage /> :
        <ConnectMetamask {...injectMetmaskProps}/>;

}

export default App;
