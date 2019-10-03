interface NetworkNameMappings {ropsten: string, rinkeby: string, mainnet: string, local: string, sokol: string, poa: string, xdai: string}

export function getNetworkName(network: any): string;

export function getHttpRpcConnectionUri(network: any, infuraKey: string): string;

export function networkSplitter(network: any, {ropsten, rinkeby, mainnet, local, sokol, poa, xdai}: NetworkNameMappings): string;

