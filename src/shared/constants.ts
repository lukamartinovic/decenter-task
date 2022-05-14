export const getCDPAddress = "0x68C61AF097b834c68eA6EA5e46aF6c04E8945B2d";

export const getCDPABI = [
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

export const getRateABI = [
  {
    "inputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "constructor"
  },
  {
    "anonymous": true,
    "inputs": [
      {
        "indexed": true,
        "internalType": "bytes4",
        "name": "sig",
        "type": "bytes4"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "arg1",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "arg2",
        "type": "bytes32"
      },
      {
        "indexed": true,
        "internalType": "bytes32",
        "name": "arg3",
        "type": "bytes32"
      },
      {
        "indexed": false,
        "internalType": "bytes",
        "name": "data",
        "type": "bytes"
      }
    ],
    "name": "LogNote",
    "type": "event"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "Line",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [],
    "name": "cage",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "can",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "dai",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "debt",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "usr",
        "type": "address"
      }
    ],
    "name": "deny",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "ilk",
        "type": "bytes32"
      },
      {
        "internalType": "bytes32",
        "name": "what",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "data",
        "type": "uint256"
      }
    ],
    "name": "file",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "what",
        "type": "bytes32"
      },
      {
        "internalType": "uint256",
        "name": "data",
        "type": "uint256"
      }
    ],
    "name": "file",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "ilk",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "src",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "wad",
        "type": "uint256"
      }
    ],
    "name": "flux",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "i",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "u",
        "type": "address"
      },
      {
        "internalType": "int256",
        "name": "rate",
        "type": "int256"
      }
    ],
    "name": "fold",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "ilk",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "src",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "int256",
        "name": "dink",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "dart",
        "type": "int256"
      }
    ],
    "name": "fork",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "i",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "u",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "v",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "w",
        "type": "address"
      },
      {
        "internalType": "int256",
        "name": "dink",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "dart",
        "type": "int256"
      }
    ],
    "name": "frob",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "gem",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "i",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "u",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "v",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "w",
        "type": "address"
      },
      {
        "internalType": "int256",
        "name": "dink",
        "type": "int256"
      },
      {
        "internalType": "int256",
        "name": "dart",
        "type": "int256"
      }
    ],
    "name": "grab",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "uint256",
        "name": "rad",
        "type": "uint256"
      }
    ],
    "name": "heal",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "usr",
        "type": "address"
      }
    ],
    "name": "hope",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      }
    ],
    "name": "ilks",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "Art",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "rate",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "spot",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "line",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "dust",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "ilk",
        "type": "bytes32"
      }
    ],
    "name": "init",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "live",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "src",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "dst",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "rad",
        "type": "uint256"
      }
    ],
    "name": "move",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "usr",
        "type": "address"
      }
    ],
    "name": "nope",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "usr",
        "type": "address"
      }
    ],
    "name": "rely",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "sin",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "ilk",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "usr",
        "type": "address"
      },
      {
        "internalType": "int256",
        "name": "wad",
        "type": "int256"
      }
    ],
    "name": "slip",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": false,
    "inputs": [
      {
        "internalType": "address",
        "name": "u",
        "type": "address"
      },
      {
        "internalType": "address",
        "name": "v",
        "type": "address"
      },
      {
        "internalType": "uint256",
        "name": "rad",
        "type": "uint256"
      }
    ],
    "name": "suck",
    "outputs": [],
    "payable": false,
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "bytes32",
        "name": "",
        "type": "bytes32"
      },
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "urns",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "ink",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "art",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [],
    "name": "vice",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  },
  {
    "constant": true,
    "inputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      }
    ],
    "name": "wards",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "payable": false,
    "stateMutability": "view",
    "type": "function"
  }
];

export const getRateAddress = "0x35d1b3f3d7966a1dfe207aa4514c12a259a0492b";



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

export const liquidationRatios = {
    'ETH-A': 150,
    'WBTC-A': 150,
    'USDC-A': 101
} as Record<string, number>;

export const collateralPrices = {
    'ETH-A': 2051,
    'WBTC-A': 29917,
    'USDC-A': 1
} as Record<string, number>;