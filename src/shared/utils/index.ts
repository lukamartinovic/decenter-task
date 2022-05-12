import {BigNumber} from "ethers";

export const getCDPIds = (id: string): string[] => {
    const CDPIds = [];

    const BNId = BigNumber.from(id);

    const isMin = BigNumber.from(BNId).lt(10);

    const rangeStart = isMin ? BigNumber.from(1) : BigNumber.from(BNId).sub(10);
    const rangeEnd = isMin ? BigNumber.from(20) : BigNumber.from(BNId).add(10);

    for(let i = rangeStart; i.lte(rangeEnd); i = i.add(1)) {
        CDPIds.push(i.toString());
    }

    return CDPIds;
}

