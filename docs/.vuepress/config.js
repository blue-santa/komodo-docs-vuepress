module.exports = {
  title: 'Komodo Developer Documentation',
  base: '/komodo-docs-vuepress/',
  description: 'Documentation for developers building on Komodo',
  themeConfig: {
    nav: [
      { text: 'Start Here', link: '/start-here/introduction.md' },
      { text: 'KomodoPlatform.com', link: 'https://komodoplatform.com' },
    ],
    sidebar: [
      {
        title: 'Start Here',
        collapsable: true,
        children: [
          [ '/start-here/introduction.md', 'Introduction'],
          [ '/start-here/outline-for-new-developers.md', 'Outline for New Developers'],
          [ '/start-here/cc-overview.md', 'Overview of CryptoConditions (Smart Contracts)']
        ]
      },
      {
        title: 'Installation and Setup',
        collapsable: true,
        children: [
          [ '/installations/basic-instructions.md', 'Basic Installation Instructions'],
          [ '/installations/creating-asset-chains.md', 'Asset Chain Creation'],
          [ '/installations/common-runtime-parameters.md', 'Basic Runtime Parameters'],
          [ '/installations/asset-chain-parameters.md', 'Runtime Tools for Asset Chains']
        ]
      },
      {
        title: 'CryptoConditions (Smart Contract Templates)',
        collapsable: true,
        children: [
          [ '/cryptoconditions/cryptoconditions-instructions.md', 'Instructions for CryptoConditions'],
          [ '/cryptoconditions/cc-channels.md', 'Channels'],
          [ '/cryptoconditions/cc-dice.md', 'Dice'],
          [ '/cryptoconditions/cc-faucet.md', 'Faucet'],
          [ '/cryptoconditions/cc-gateways.md', 'Gateways'],
          [ '/cryptoconditions/cc-oracles.md', 'Oracles'],
          [ '/cryptoconditions/cc-rewards.md', 'Rewards'],
          [ '/cryptoconditions/cc-tokens.md', 'Tokens']
        ]
      },
      {
        title: 'Essential RPC Calls',
        collapsable: true,
        children: [
          [ '/essential-rpc/address-index.md', 'Address'],
          [ '/essential-rpc/blockchain.md', 'Blockchain'],
          [ '/essential-rpc/control.md', 'Control'],
          [ '/essential-rpc/disclosure.md', 'Disclosure'],
          [ '/essential-rpc/generate.md', 'Generate'],
          [ '/essential-rpc/mining.md', 'Mining'],
          [ '/essential-rpc/jumblr.md', 'Jumblr'],
          [ '/essential-rpc/network.md', 'Network'],
          [ '/essential-rpc/rawtransactions.md', 'Raw Transactions'],
          [ '/essential-rpc/util.md', 'Util'],
          [ '/essential-rpc/wallet.md', 'Wallet']
        ]
      }
    ]
  }
}
