const networkSplitter = (network, {ropsten, rinkeby, mainnet, local, sokol, poa, xdai}) => {
    switch (network) {
        case 1:
        case '1':
        case 'mainnet':
            return mainnet;
        case 3:
        case '3':
        case 'ropsten':
            return ropsten;
        case 4:
        case '4':
        case 'rinkeby':
            return rinkeby;
        case 5777:
        case '5777':
        case 'local':
            return local;
        case 77:
        case '77':
        case 'sokol':
            return sokol;
        case 99:
        case '99':
        case 'poa':
            return poa;
        case 100:
        case '100':
        case 'xdai':
            return xdai;
        default:
            throw new Error(`Unknown network ID ${network}`);
    }
};

/**
 * @param {String, Number} network The Ethereum-based blockchain network identifier
 * @returns {string} The network name
 */
const getNetworkName = (network) => {
    return networkSplitter(network, {
        // Eth main & test
        mainnet: 'mainnet',
        ropsten: 'ropsten',
        rinkeby: 'rinkeby',
        // Ganache / local
        local: 'local',
        // POA / xDAI networks
        sokol: 'sokol',
        poa: 'poa',
        xdai: 'xdai',
    });
};

/**
 * @param {String, Number} network The Ethereum-based blockchain network identifier
 * @param {string?} infuraKey Optional as not all networks require this
 * @return {string} the RPC connect string
 */
const getRpcConnectionUri = (network, infuraKey) => {
    const networkName = getNetworkName(network);

    switch (networkName) {
        case 'mainnet':
        case 'ropsten':
        case 'rinkeby':
            return `https://${networkName}.infura.io/v3/${infuraKey}`;
        case 'local':
            return `http://127.0.0.1:7545`;
        case 'sokol':
            return `https://sokol.poa.network`;
        case 'poa':
            return `https://core.poa.network`;
        case 'xdai':
            return `https://xdai.poa.network`;
        default:
            throw new Error(`Unknown network ID ${network}`);
    }
};

module.exports = {
    getNetworkName,
    networkSplitter,
    getRpcConnectionUri
};
