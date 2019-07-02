var HDWalletProvider = require("truffle-hdwallet-provider");
var providerproduct = new HDWalletProvider("xxxxxxx", "http://106.75.184.214:8545");
var provider214 = new HDWalletProvider("xxxxxxx", "http://192.168.0.214:8545");
var provider213 = new HDWalletProvider("xxxxxxx", "http://192.168.0.213:8545");
var provider212 = new HDWalletProvider("xxxxxxx", "http://192.168.0.212:8545");
var provider211 = new HDWalletProvider("xxxxxxx", "http://192.168.0.211:8545");
var providerlocal = new HDWalletProvider("xxxxxxx", "http://127.0.0.1:8545");

module.exports = {
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  networks: {
    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache-cli, geth or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    development: {
      provider:providerlocal,
      gas: 20000000,
      network_id: "*", // Match any network id
      from:"0xcd3bca4d0397293de34dd812fafc9e46af86db1c"
      },
      product: {
            //provider:providerproduct,
            host: "192.168.0.74",
            port:38545,
            network_id: "*",       // Any network (default: none)
            gas: 20000000,
            from:"0x481d24a529e670b3172ee024a2fb9732aeb76cf4",
      },
      testnet: {
          provider:provider211,
          gas: 20000000,
          network_id: "*", // Match any network id
          from:"0xcd3bca4d0397293de34dd812fafc9e46af86db1c"
      },testnet2: {
          provider:provider212,
          gas: 20000000,
          network_id: "*", // Match any network id
          from:"0xcd3bca4d0397293de34dd812fafc9e46af86db1c"
      },testnet3: {
          provider:provider213,
          gas: 20000000,
          network_id: "*", // Match any network id
          from:"0xcd3bca4d0397293de34dd812fafc9e46af86db1c"
      },testnet4: {
          provider:provider214,
          gas: 20000000,
          network_id: "*", // Match any network id
          from:"0xcd3bca4d0397293de34dd812fafc9e46af86db1c"
      }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
       version: "0.4.26",    // Fetch exact version from solc-bin (default: truffle's version)
      // docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: true,
         runs: 200
       },
       //evmVersion: "byzantium"
      }
    }
  }
  ,
  solc: {
      optimizer: {
        enabled: true,
        runs: 200
      }
  }
}
