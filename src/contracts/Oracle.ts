import { Abi } from "viem";

export const abi = [
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
    stateMutability: "pure",
    payable: false,
    gas: null,
  },
] as const satisfies Abi;

export const address = "0x1406F88f2F9eBf96a497C9Af6beC839db392649A";
