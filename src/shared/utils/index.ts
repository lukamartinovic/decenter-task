import { BigNumber, utils } from "ethers";

import Decimal from "decimal.js";
import { formatEther } from "ethers/lib/utils";
import { liquidationRatios } from "../constants";

export const getCDPIds = (id: number, numberOfIds: number): string[] => {
    const CDPIds = [];

    const isMin = id < Math.round(numberOfIds / 2);

    const rangeStart = isMin ? 0 : id - Math.round(numberOfIds / 2);
    const rangeEnd = isMin ? numberOfIds : id + Math.round(numberOfIds / 2);

    for (let i = rangeStart; i <= rangeEnd; i++) {
        CDPIds.push(i.toString());
    }

    return CDPIds.slice(0, numberOfIds);
};

export const sortCDPsByClosestId = (data: FormattedCDP[], id: number) =>
    data.sort((a, b) => Math.abs(a.id - id) - Math.abs(b.id - id));

export const formatCDPData = ({
    collateral,
    debt,
    ilk,
    owner,
    userAddr,
    id,
}: CDP): FormattedCDP => {
    return {
        collateral: collateral.toString(),
        debt: debt.toString(),
        collateralType: utils.parseBytes32String(ilk),
        owner,
        userAddr,
        id,
    };
};

export const getTotalDebt = (debt: string, rate: string) => {
    const decimalDebt = new Decimal(formatEther(debt));
    let decimalRate = rate.split("");
    decimalRate.splice(1, 0, ".");
    return decimalDebt.mul(decimalRate.join("")).toFixed(9);
};

const getLocaleString = (
    stringNumber: string | number | Decimal | BigNumber
) => {
    if (typeof stringNumber === "string")
        return Number(stringNumber).toLocaleString();
    else return Number(stringNumber.toString()).toLocaleString();
};

export const getExtraCDPDetails = (
    CDP: FormattedCDP,
    rate: string,
    collateralPrices: Record<string, number>
) => {
    const collateralPrice = collateralPrices[CDP.collateralType] || 1;
    const collateralInDai = new Decimal(formatEther(CDP.collateral)).mul(
        collateralPrice
    );
    const totalDebt = new Decimal(getTotalDebt(CDP.debt.toString(), rate));

    const ratio = collateralInDai.div(totalDebt).mul(100);
    const liquidationRatio =
        (liquidationRatios[CDP.collateralType] || 150) / 100;
    const maxCollateralDraw = collateralInDai
        .sub(totalDebt.mul(liquidationRatio))
        .div(collateralPrice);
    const liquidated = ratio.toNumber() < liquidationRatio * 100;
    const maxDebtBeforeLiqudation = collateralInDai.div(liquidationRatio);

    return {
        ratio: getLocaleString(ratio),
        liquidationRatio: getLocaleString(liquidationRatio * 100),
        maxCollateralDraw: getLocaleString(maxCollateralDraw),
        maxDebtBeforeLiqudation: getLocaleString(maxDebtBeforeLiqudation),
        liquidated,
        totalDebt,
    };
};
