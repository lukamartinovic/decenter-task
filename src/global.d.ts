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

    module "*.module.scss" {
        const classes: { [key: string]: string };
        export default classes;
    }

    type CollateralTypes = string;

    module "*.svg"
}
