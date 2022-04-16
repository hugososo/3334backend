module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    }
  },
  compilers: {
    solc: {
      version: "0.8.4",
      docker: true,
      settings: {
        optimizer: {
          enabled: false,
          runs: 200
        },
        evmVersion: "petersburg"
      }
    }
  },
  plugins: [
    "@chainsafe/truffle-plugin-abigen"
  ]
};
