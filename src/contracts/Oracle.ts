import { Abi } from "viem";

export const abi = [
  {
    type: "error",
    inputs: [],
    name: "CommitTooEarly",
  },
  {
    type: "error",
    inputs: [],
    name: "InvalidReveal",
  },
  {
    type: "error",
    inputs: [],
    name: "RevealTooEarly",
  },
  {
    type: "function",
    inputs: [],
    name: "canCommit",
    constant: true,
    outputs: [
      {
        name: "",
        type: "bool",
        baseType: "bool",
        components: null,
        arrayLength: null,
        arrayChildren: null,
      },
    ],
    stateMutability: "view",
    payable: false,
    gas: null,
  },
  {
    type: "function",
    inputs: [],
    name: "canReveal",
    constant: true,
    outputs: [
      {
        name: "",
        type: "bool",
        baseType: "bool",
        components: null,
        arrayLength: null,
        arrayChildren: null,
      },
    ],
    stateMutability: "view",
    payable: false,
    gas: null,
  },
  {
    type: "function",
    inputs: [
      {
        name: "hashValue",
        type: "bytes32",
        baseType: "bytes32",
        components: null,
        arrayLength: null,
        arrayChildren: null,
      },
    ],
    name: "commit",
    constant: false,
    outputs: [],
    stateMutability: "nonpayable",
    payable: false,
    gas: null,
  },
  {
    type: "function",
    inputs: [],
    name: "decimals",
    constant: true,
    outputs: [
      {
        name: "",
        type: "uint8",
        baseType: "uint8",
        components: null,
        arrayLength: null,
        arrayChildren: null,
      },
    ],
    stateMutability: "pure",
    payable: false,
    gas: null,
  },
  {
    type: "function",
    inputs: [],
    name: "epochLength",
    constant: true,
    outputs: [
      {
        name: "",
        type: "uint16",
        baseType: "uint16",
        components: null,
        arrayLength: null,
        arrayChildren: null,
      },
    ],
    stateMutability: "pure",
    payable: false,
    gas: null,
  },
  {
    type: "function",
    inputs: [],
    name: "getActiveEpoch",
    constant: true,
    outputs: [
      {
        name: "",
        type: "uint256",
        baseType: "uint256",
        components: null,
        arrayLength: null,
        arrayChildren: null,
      },
    ],
    stateMutability: "view",
    payable: false,
    gas: null,
  },
  {
    type: "function",
    inputs: [],
    name: "getPrice",
    constant: true,
    outputs: [
      {
        name: "",
        type: "uint256",
        baseType: "uint256",
        components: null,
        arrayLength: null,
        arrayChildren: null,
      },
    ],
    stateMutability: "view",
    payable: false,
    gas: null,
  },
  {
    type: "function",
    inputs: [
      {
        name: "secret",
        type: "uint256",
        baseType: "uint256",
        components: null,
        arrayLength: null,
        arrayChildren: null,
      },
      {
        name: "price",
        type: "uint256",
        baseType: "uint256",
        components: null,
        arrayLength: null,
        arrayChildren: null,
      },
    ],
    name: "reveal",
    constant: false,
    outputs: [],
    stateMutability: "nonpayable",
    payable: false,
    gas: null,
  },
] as const satisfies Abi;

export const address = "0xbB40D036BCfb6cc705dD29f336Fd515b1b99c3fc";
