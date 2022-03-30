require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/3RSw8RQHZzznzeg9UB2g2Wk77QqnwcPU',
      accounts: ['4d79c33fd400be743d1e4949b420dc8b96ca4bc04632e780af926a4594fca84d'],
    },
  },
};
//https://eth-ropsten.alchemyapi.io/v2/3RSw8RQHZzznzeg9UB2g2Wk77QqnwcPU
// in url
//4d79c33fd400be743d1e4949b420dc8b96ca4bc04632e780af926a4594fca84d
// in accounts