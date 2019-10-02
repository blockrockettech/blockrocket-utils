interface NetworkNameMappings {ropsten: string, rinkeby: string, mainnet: string, local: string}

export function networkSplitter(network: string, {ropsten, rinkeby, mainnet, local}: NetworkNameMappings): string {
    switch (network) {
        case '1':
        case 'mainnet':
            return mainnet;
        case '3':
        case 'ropsten':
            return ropsten;
        case '4':
        case 'rinkeby':
            return rinkeby;
        case '5777':
        case 'local':
            // This may change if a clean deploy of KODA locally is not done
            return local;
        default:
            throw new Error(`Unknown network ID ${network}`);
    }
}

export function getNetwork(network: string): string {
    return networkSplitter(network, {
        mainnet: 'mainnet',
        ropsten: 'ropsten',
        rinkeby: 'rinkeby',
        local: 'local'
    });
}