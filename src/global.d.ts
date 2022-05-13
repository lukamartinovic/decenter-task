import {BigNumber} from "ethers";

declare global {
    interface CDP {
        collateral: BigNumber,
        debt: BigNumber,
        ilk: string,
        owner: string,
        urn: string,
        userAddr: string,
        id: number
    }

    interface FormattedCDP {
        collateral: string,
        debt: string,
        collateralType: string,
        owner: string,
        userAddr: string,
        id: number
    }

    type CollateralTypes = 'ETH-A' | 'WBTC-A' | 'USDC-A';
}
