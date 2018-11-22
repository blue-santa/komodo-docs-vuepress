module.exports = {
  title: 'Komodo Developer Documentation',
  base: '/komodo-docs-vuepress/',
  description: 'Documentation for developers building on Komodo',
  themeConfig: {
    nav: [
      { text: 'Start Here', link: '/start-here/_001-introduction.md' },
      { text: 'KomodoPlatform.com', link: 'https://komodoplatform.com' },
    ],
    sidebar: [
      {
        title: 'Start Here',
        collapsable: true,
        children: [
          [ '/start-here/_001-introduction.md', 'Introduction'],
          [ '/start-here/_005-outline-for-new-developers.md', 'Outline for New Developers'],
          [ '/start-here/_017-cc-overview.md', 'Overview of CryptoConditions (Smart Contracts)']
        ]
      },
      {
        title: 'Installation and Setup',
        collapsable: true,
        children: [
          [ '/installations/_010-basic-instructions.md', 'Basic Installation Instructions'],
          [ '/installations/_015-creating-asset-chains.md', 'Asset Chain Creation'],
          [ '/installations/_019-common-runtime-parameters.md', 'Basic Runtime Parameters'],
          [ '/installations/_023-asset-chain-parameters.md', 'Runtime Tools for Asset Chains']
        ]
      },
      {
        title: 'CryptoConditions (Smart Contract Templates)',
        collapsable: true,
        children: [
          [ '/cryptoconditions/_101-cryptoconditions-instructions.md', 'Instructions for CryptoConditions'],
          [ '/cryptoconditions/_110-cc-channels.md', 'Channels'],
          [ '/cryptoconditions/_120-cc-dice.md', 'Dice'],
          [ '/cryptoconditions/_130-cc-faucet.md', 'Faucet'],
          [ '/cryptoconditions/_133-cc-gateways.md', 'Gateways'],
          [ '/cryptoconditions/_135-cc-oracles.md', 'Oracles'],
          [ '/cryptoconditions/_140-cc-rewards.md', 'Rewards'],
          [ '/cryptoconditions/_150-cc-tokens.md', 'Tokens']
        ]
      },
      {
        title: 'Essential RPC Calls',
        collapsable: true,
        children: [
          [ '/essential-rpc/_303-address-index.md', 'Address'],
          [ '/essential-rpc/_307-blockchain.md', 'Blockchain'],
          [ '/essential-rpc/_311-control.md', 'Control'],
          [ '/essential-rpc/_315-disclosure.md', 'Disclosure'],
          [ '/essential-rpc/_319-generate.md', 'Generate'],
          [ '/essential-rpc/_323-mining.md', 'Mining'],
          [ '/essential-rpc/_325-jumblr.md', 'Jumblr'],
          [ '/essential-rpc/_327-network.md', 'Network'],
          [ '/essential-rpc/_331-rawtransactions.md', 'Raw Transactions'],
          [ '/essential-rpc/_335-util.md', 'Util'],
          [ '/essential-rpc/_339-wallet.md', 'Wallet']
        ]
      }
    ]
  }
}
