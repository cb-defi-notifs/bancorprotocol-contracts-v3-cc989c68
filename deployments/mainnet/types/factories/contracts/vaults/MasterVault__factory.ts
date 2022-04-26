/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type {
  MasterVault,
  MasterVaultInterface,
} from "../../../contracts/vaults/MasterVault";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ITokenGovernance",
        name: "initBNTGovernance",
        type: "address",
      },
      {
        internalType: "contract ITokenGovernance",
        name: "initVBNTGovernance",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "AccessDenied",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAddress",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidToken",
    type: "error",
  },
  {
    inputs: [],
    name: "NotPayable",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract Token",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsBurned",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract Token",
        name: "token",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "caller",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "target",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "FundsWithdrawn",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getRoleMember",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleMemberCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isPayable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "pause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "paused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "postUpgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "roleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "roleAssetManager",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "roleBNTManager",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unpause",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "uint16",
        name: "",
        type: "uint16",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract Token",
        name: "token",
        type: "address",
      },
      {
        internalType: "address payable",
        name: "target",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFunds",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
];

const _bytecode =
  "0x6101006040523480156200001257600080fd5b5060405162001f9738038062001f97833981016040819052620000359162000191565b818181620000438162000150565b816200004f8162000150565b6001600160a01b03841660a081905260408051637e062a3560e11b8152905163fc0c546a916004808201926020929091908290030181865afa1580156200009a573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000c09190620001d0565b6001600160a01b03908116608052831660e081905260408051637e062a3560e11b8152905163fc0c546a916004808201926020929091908290030181865afa15801562000111573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001379190620001d0565b6001600160a01b031660c05250620001f7945050505050565b6001600160a01b038116620001785760405163e6c4247b60e01b815260040160405180910390fd5b50565b6001600160a01b03811681146200017857600080fd5b60008060408385031215620001a557600080fd5b8251620001b2816200017b565b6020840151909250620001c5816200017b565b809150509250929050565b600060208284031215620001e357600080fd5b8151620001f0816200017b565b9392505050565b60805160a05160c05160e051611d5f6200023860003960006109fb015260006109bc015260006109480152600081816109090152610b8c0152611d5f6000f3fe6080604052600436106101395760003560e01c80639010d07c116100ab578063a217fddf1161006f578063a217fddf14610379578063b187bd261461038e578063c878ab33146103a3578063ca15c873146103d6578063ce46e046146103f6578063d547741f1461040a57600080fd5b80639010d07c146102ad57806391d14854146102e557806392bd95ea1461030557806393867fb5146103385780639dc29fac1461035957600080fd5b80633f4ba83a116100fd5780633f4ba83a1461021a57806354fd4d501461022f5780635c975abb1461024b5780638129fc1c146102635780638456cb59146102785780638cd2403d1461028d57600080fd5b806301ffc9a7146101475780631c20fadd1461017c578063248a9ca31461019c5780632f2ff15d146101da57806336568abe146101fa57600080fd5b3661014257005b005b600080fd5b34801561015357600080fd5b5061016761016236600461193f565b61042a565b60405190151581526020015b60405180910390f35b34801561018857600080fd5b5061014061019736600461197e565b610455565b3480156101a857600080fd5b506101cc6101b73660046119bf565b60009081526065602052604090206001015490565b604051908152602001610173565b3480156101e657600080fd5b506101406101f53660046119d8565b6105cb565b34801561020657600080fd5b506101406102153660046119d8565b6105f6565b34801561022657600080fd5b50610140610674565b34801561023b57600080fd5b5060405160018152602001610173565b34801561025757600080fd5b5060fb5460ff16610167565b34801561026f57600080fd5b50610140610696565b34801561028457600080fd5b50610140610757565b34801561029957600080fd5b506101406102a8366004611a08565b610777565b3480156102b957600080fd5b506102cd6102c8366004611a7a565b6107c8565b6040516001600160a01b039091168152602001610173565b3480156102f157600080fd5b506101676103003660046119d8565b6107e7565b34801561031157600080fd5b507f89ce14d20697a788f57260f7690044299bde7ea88cfb7e43d120a0c031f1ffc16101cc565b34801561034457600080fd5b50600080516020611d338339815191526101cc565b34801561036557600080fd5b50610140610374366004611a9c565b610812565b34801561038557600080fd5b506101cc600081565b34801561039a57600080fd5b50610167610adc565b3480156103af57600080fd5b507f4cbb5676e6e25e1a3b8a36de10472bcac96f97bd8dd87af6f330881b84739eb86101cc565b3480156103e257600080fd5b506101cc6103f13660046119bf565b610aef565b34801561040257600080fd5b506001610167565b34801561041657600080fd5b506101406104253660046119d8565b610b06565b60006001600160e01b03198216635a05180f60e01b148061044f575061044f82610b2c565b92915050565b8161045f81610b61565b600261012d54036104b75760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064015b60405180910390fd5b600261012d5560fb5460ff16156104e05760405162461bcd60e51b81526004016104ae90611ac8565b338484846104f084848484610b88565b61050d57604051634ca8886760e01b815260040160405180910390fd5b85156105bb5773eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b0389160361054f5761054a6001600160a01b03881687610c24565b610563565b6105636001600160a01b0389168888610d3d565b866001600160a01b0316336001600160a01b0316896001600160a01b03167fc322efa58c9cb2c39cfffdac61d35c8643f5cbf13c6a7d0034de2cf18923aff3896040516105b291815260200190565b60405180910390a45b5050600161012d55505050505050565b6000828152606560205260409020600101546105e78133610dbe565b6105f18383610e22565b505050565b6001600160a01b03811633146106665760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b60648201526084016104ae565b6106708282610e44565b5050565b61068c600080516020611d3383398151915233610e66565b610694610e8d565b565b600054610100900460ff166106b15760005460ff16156106b5565b303b155b6107185760405162461bcd60e51b815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201526d191e481a5b9a5d1a585b1a5e995960921b60648201526084016104ae565b600054610100900460ff1615801561073a576000805461ffff19166101011790555b610742610f20565b8015610754576000805461ff00191690555b50565b61076f600080516020611d3383398151915233610e66565b610694610f57565b60c95460009061078c9061ffff166001611b08565b905061ffff81166001146107b25760405162dc149f60e41b815260040160405180910390fd5b60c9805461ffff191661ffff8316179055505050565b60008281526097602052604081206107e09083610faf565b9392505050565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b600261012d54036108655760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c0060448201526064016104ae565b600261012d5560fb5460ff161561088e5760405162461bcd60e51b81526004016104ae90611ac8565b338260008361089f84848484610b88565b6108bc57604051634ca8886760e01b815260040160405180910390fd5b8415610ace5773eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b038716036108ff5760405163c1ab6dc160e01b815260040160405180910390fd5b6001600160a01b037f00000000000000000000000000000000000000000000000000000000000000008116908716036109b257604051630852cd8d60e31b8152600481018690527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c68906024015b600060405180830381600087803b15801561099557600080fd5b505af11580156109a9573d6000803e3d6000fd5b50505050610a8d565b6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000811690871603610a3257604051630852cd8d60e31b8152600481018690527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316906342966c689060240161097b565b604051630852cd8d60e31b8152600481018690526001600160a01b038716906342966c6890602401600060405180830381600087803b158015610a7457600080fd5b505af1158015610a88573d6000803e3d6000fd5b505050505b60405185815233906001600160a01b038816907fd3fda22e13f8cb743a9ceaca6e14022b6677188d20f3c3047f5c9033e07a4e879060200160405180910390a35b5050600161012d5550505050565b6000610aea60fb5460ff1690565b905090565b600081815260976020526040812061044f90610fbb565b600082815260656020526040902060010154610b228133610dbe565b6105f18383610e44565b60006001600160e01b03198216637965db0b60e01b148061044f57506301ffc9a760e01b6001600160e01b031983161461044f565b6001600160a01b0381166107545760405163e6c4247b60e01b815260040160405180910390fd5b60007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03908116908516148015610beb5750610beb7f4cbb5676e6e25e1a3b8a36de10472bcac96f97bd8dd87af6f330881b84739eb8866107e7565b80610c1b5750610c1b7f89ce14d20697a788f57260f7690044299bde7ea88cfb7e43d120a0c031f1ffc1866107e7565b95945050505050565b80471015610c745760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a20696e73756666696369656e742062616c616e636500000060448201526064016104ae565b6000826001600160a01b03168260405160006040518083038185875af1925050503d8060008114610cc1576040519150601f19603f3d011682016040523d82523d6000602084013e610cc6565b606091505b50509050806105f15760405162461bcd60e51b815260206004820152603a60248201527f416464726573733a20756e61626c6520746f2073656e642076616c75652c207260448201527f6563697069656e74206d6179206861766520726576657274656400000000000060648201526084016104ae565b80600003610d4a57505050565b73eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6001600160a01b03841603610daa576040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015610da4573d6000803e3d6000fd5b50505050565b6105f16001600160a01b0384168383610fc5565b610dc882826107e7565b61067057610de0816001600160a01b03166014611017565b610deb836020611017565b604051602001610dfc929190611b5a565b60408051601f198184030181529082905262461bcd60e51b82526104ae91600401611bcf565b610e2c82826111b3565b60008281526097602052604090206105f19082611239565b610e4e828261124e565b60008281526097602052604090206105f190826112b5565b610e7082826107e7565b61067057604051634ca8886760e01b815260040160405180910390fd5b60fb5460ff16610ed65760405162461bcd60e51b815260206004820152601460248201527314185d5cd8589b194e881b9bdd081c185d5cd95960621b60448201526064016104ae565b60fb805460ff191690557f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa335b6040516001600160a01b03909116815260200160405180910390a1565b600054610100900460ff16610f475760405162461bcd60e51b81526004016104ae90611c02565b610f4f6112ca565b610694611311565b60fb5460ff1615610f7a5760405162461bcd60e51b81526004016104ae90611ac8565b60fb805460ff191660011790557f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a258610f033390565b60006107e083836113a8565b600061044f825490565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b1790526105f19084906113d2565b60606000611026836002611c4d565b611031906002611c6c565b67ffffffffffffffff81111561104957611049611c84565b6040519080825280601f01601f191660200182016040528015611073576020820181803683370190505b509050600360fc1b8160008151811061108e5761108e611c9a565b60200101906001600160f81b031916908160001a905350600f60fb1b816001815181106110bd576110bd611c9a565b60200101906001600160f81b031916908160001a90535060006110e1846002611c4d565b6110ec906001611c6c565b90505b6001811115611164576f181899199a1a9b1b9c1cb0b131b232b360811b85600f166010811061112057611120611c9a565b1a60f81b82828151811061113657611136611c9a565b60200101906001600160f81b031916908160001a90535060049490941c9361115d81611cb0565b90506110ef565b5083156107e05760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e7460448201526064016104ae565b6111bd82826107e7565b6106705760008281526065602090815260408083206001600160a01b03851684529091529020805460ff191660011790556111f53390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b60006107e0836001600160a01b0384166114a4565b61125882826107e7565b156106705760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b60006107e0836001600160a01b0384166114f3565b600054610100900460ff166112f15760405162461bcd60e51b81526004016104ae90611c02565b6112f96115e6565b61130161161d565b61130961164c565b61069461167b565b600054610100900460ff166113385760405162461bcd60e51b81526004016104ae90611c02565b6113707f89ce14d20697a788f57260f7690044299bde7ea88cfb7e43d120a0c031f1ffc1600080516020611d338339815191526116a2565b6106947f4cbb5676e6e25e1a3b8a36de10472bcac96f97bd8dd87af6f330881b84739eb8600080516020611d338339815191526116a2565b60008260000182815481106113bf576113bf611c9a565b9060005260206000200154905092915050565b6000611427826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166116ed9092919063ffffffff16565b8051909150156105f157808060200190518101906114459190611cc7565b6105f15760405162461bcd60e51b815260206004820152602a60248201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6044820152691bdd081cdd58d8d9595960b21b60648201526084016104ae565b60008181526001830160205260408120546114eb5750815460018181018455600084815260208082209093018490558454848252828601909352604090209190915561044f565b50600061044f565b600081815260018301602052604081205480156115dc576000611517600183611ce9565b855490915060009061152b90600190611ce9565b905081811461159057600086600001828154811061154b5761154b611c9a565b906000526020600020015490508087600001848154811061156e5761156e611c9a565b6000918252602080832090910192909255918252600188019052604090208390555b85548690806115a1576115a1611d00565b60019003818190600052602060002001600090559055856001016000868152602001908152602001600020600090556001935050505061044f565b600091505061044f565b600054610100900460ff1661160d5760405162461bcd60e51b81526004016104ae90611c02565b61161561167b565b610694611704565b600054610100900460ff166116445760405162461bcd60e51b81526004016104ae90611c02565b610694611769565b600054610100900460ff166116735760405162461bcd60e51b81526004016104ae90611c02565b61069461179c565b600054610100900460ff166106945760405162461bcd60e51b81526004016104ae90611c02565b600082815260656020526040808220600101805490849055905190918391839186917fbd79b86ffe0ab8e8776151514217cd7cacd52c909f66475c3af44e129f0b00ff9190a4505050565b60606116fc84846000856117cb565b949350505050565b600054610100900460ff1661172b5760405162461bcd60e51b81526004016104ae90611c02565b60c9805461ffff19166001179055611751600080516020611d33833981519152806116a2565b610694600080516020611d33833981519152336118fc565b600054610100900460ff166117905760405162461bcd60e51b81526004016104ae90611c02565b60fb805460ff19169055565b600054610100900460ff166117c35760405162461bcd60e51b81526004016104ae90611c02565b600161012d55565b60608247101561182c5760405162461bcd60e51b815260206004820152602660248201527f416464726573733a20696e73756666696369656e742062616c616e636520666f6044820152651c8818d85b1b60d21b60648201526084016104ae565b6001600160a01b0385163b6118835760405162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e747261637400000060448201526064016104ae565b600080866001600160a01b0316858760405161189f9190611d16565b60006040518083038185875af1925050503d80600081146118dc576040519150601f19603f3d011682016040523d82523d6000602084013e6118e1565b606091505b50915091506118f1828286611906565b979650505050505050565b6106708282610e22565b606083156119155750816107e0565b8251156119255782518084602001fd5b8160405162461bcd60e51b81526004016104ae9190611bcf565b60006020828403121561195157600080fd5b81356001600160e01b0319811681146107e057600080fd5b6001600160a01b038116811461075457600080fd5b60008060006060848603121561199357600080fd5b833561199e81611969565b925060208401356119ae81611969565b929592945050506040919091013590565b6000602082840312156119d157600080fd5b5035919050565b600080604083850312156119eb57600080fd5b8235915060208301356119fd81611969565b809150509250929050565b60008060208385031215611a1b57600080fd5b823567ffffffffffffffff80821115611a3357600080fd5b818501915085601f830112611a4757600080fd5b813581811115611a5657600080fd5b866020828501011115611a6857600080fd5b60209290920196919550909350505050565b60008060408385031215611a8d57600080fd5b50508035926020909101359150565b60008060408385031215611aaf57600080fd5b8235611aba81611969565b946020939093013593505050565b60208082526010908201526f14185d5cd8589b194e881c185d5cd95960821b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b600061ffff808316818516808303821115611b2557611b25611af2565b01949350505050565b60005b83811015611b49578181015183820152602001611b31565b83811115610da45750506000910152565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000815260008351611b92816017850160208801611b2e565b7001034b99036b4b9b9b4b733903937b6329607d1b6017918401918201528351611bc3816028840160208801611b2e565b01602801949350505050565b6020815260008251806020840152611bee816040850160208701611b2e565b601f01601f19169190910160400192915050565b6020808252602b908201527f496e697469616c697a61626c653a20636f6e7472616374206973206e6f74206960408201526a6e697469616c697a696e6760a81b606082015260800190565b6000816000190483118215151615611c6757611c67611af2565b500290565b60008219821115611c7f57611c7f611af2565b500190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052603260045260246000fd5b600081611cbf57611cbf611af2565b506000190190565b600060208284031215611cd957600080fd5b815180151581146107e057600080fd5b600082821015611cfb57611cfb611af2565b500390565b634e487b7160e01b600052603160045260246000fd5b60008251611d28818460208701611b2e565b919091019291505056fe2172861495e7b85edac73e3cd5fbb42dd675baadf627720e687bcfdaca025096a164736f6c634300080d000a";

type MasterVaultConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MasterVaultConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MasterVault__factory extends ContractFactory {
  constructor(...args: MasterVaultConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    initBNTGovernance: string,
    initVBNTGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MasterVault> {
    return super.deploy(
      initBNTGovernance,
      initVBNTGovernance,
      overrides || {}
    ) as Promise<MasterVault>;
  }
  override getDeployTransaction(
    initBNTGovernance: string,
    initVBNTGovernance: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      initBNTGovernance,
      initVBNTGovernance,
      overrides || {}
    );
  }
  override attach(address: string): MasterVault {
    return super.attach(address) as MasterVault;
  }
  override connect(signer: Signer): MasterVault__factory {
    return super.connect(signer) as MasterVault__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MasterVaultInterface {
    return new utils.Interface(_abi) as MasterVaultInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MasterVault {
    return new Contract(address, _abi, signerOrProvider) as MasterVault;
  }
}