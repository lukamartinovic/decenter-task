export const contractAddress = "0x68C61AF097b834c68eA6EA5e46aF6c04E8945B2d";

export const abi = [
  {
    inputs: [{ internalType: "address", name: "owner", type: "address" }],
    name: "_getProxyOwner",
    outputs: [{ internalType: "address", name: "userAddr", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "_cdpId", type: "uint256" }],
    name: "getCdpInfo",
    outputs: [
      { internalType: "address", name: "urn", type: "address" },
      { internalType: "address", name: "owner", type: "address" },
      { internalType: "address", name: "userAddr", type: "address" },
      { internalType: "bytes32", name: "ilk", type: "bytes32" },
      { internalType: "uint256", name: "collateral", type: "uint256" },
      { internalType: "uint256", name: "debt", type: "uint256" },
    ],
    stateMutability: "view",
    type: "function",
  },
];



export const collateralTypes = [
  "ETH-A",
  "WBTC-A",
  "ETH-C",
  "GUNIV3DAIUSDC2-A",
  "USDC-A",
  "WSTETH-A",
  "WBTC-C",
  "ETH-B",
  "UNIV2DAIUSDC-A",
  "GUNIV3DAIUSDC1-A",
  "LINK-A",
  "MATIC-A",
  "WBTC-B",
  "MANA-A",
  "PAXUSD-A",
  "UNIV2USDCETH-A",
  "RENBTC-A",
  "CRVV1ETHSTETH-A",
  "GUSD-A",
  "UNIV2WBTCETH-A",
  "UNIV2DAIETH-A",
  "YFI-A",
  "UNIV2WBTCDAI-A",
  "UNI-A",
  "LRC-A",
  "BAL-A",
  "AAVE-A",
  "BAT-A",
  "USDC-B",
  "TUSD-A",
  "ZRX-A",
  "UNIV2ETHUSDT-A",
  "UNIV2LINKETH-A",
  "KNC-A",
  "USDT-A",
  "COMP-A",
  "UNIV2UNIETH-A",
  "UNIV2AAVEETH-A",
  "UNIV2DAIUSDT-A"
];