import {utils} from "ethers";

export const getCDPIds = (id: number, numberOfIds: number): string[] => {
    const CDPIds = [];

    const isMin = id < Math.round(numberOfIds / 2);

    const rangeStart = isMin ? 0 : id - Math.round(numberOfIds / 2);
    const rangeEnd = isMin ? numberOfIds : id + Math.round(numberOfIds / 2);

    for(let i = rangeStart; i <= rangeEnd; i++) {
        CDPIds.push(i.toString());
    }

    return CDPIds.slice(0, numberOfIds);
}

export const sortCDPsByClosestId =
    (data: FormattedCDP[], id: number) =>
        data.sort((a, b) =>
            Math.abs(a.id - id) - Math.abs(b.id - id));

export const formatCDPData = ({collateral, debt, ilk, urn, owner, userAddr, id}: CDP): FormattedCDP => {
    return ({
        collateral: collateral.toString(),
        debt: debt.toString(),
        collateralType: utils.parseBytes32String(ilk),
        owner,
        userAddr,
        id
    })
}