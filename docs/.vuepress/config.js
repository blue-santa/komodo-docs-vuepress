module.exports = {
  title: "Komodo Developer Documentation",
  base: "/komodo-docs-vuepress/",
  description: "Documentation for developers building on Komodo",
  themeConfig: {
    nav: [
      { text: "Start Here", link: "/intro/" },
      { text: "Blockchain Starter Kit", link: "/bsk/create-kic.md" },
      { text: "Write a dAPP", link: "/start-here/introduction.md" },
      {
        text: "Develop a CC based contract",
        link: "/start-here/introduction.md"
      },
      { text: "Be a Notary Node", link: "/notary/" },
      { text: "Misc. Docs", link: "https://docs.komodoplatform.com" },
      { text: "KomodoPlatform.com", link: "https://komodoplatform.com" }
    ],
    sidebar: {
      "/intro/": [
        {
          title: "Start Here",
          collapsable: true,
          children: [
            ["/intro/", "Introduction"],
            [
              "/intro/start-here/outline-for-new-developers.md",
              "Outline for New Developers"
            ],
            [
              "/intro/start-here/cc-overview.md",
              "Overview of CryptoConditions (Smart Contracts)"
            ]
          ]
        },
        {
          title: "Installation and Setup",
          collapsable: true,
          children: [
            [
              "/intro/installations/basic-instructions.md",
              "Basic Installation Instructions"
            ],
            [
              "/intro/installations/creating-asset-chains.md",
              "Asset Chain Creation"
            ],
            [
              "/intro/installations/common-runtime-parameters.md",
              "Basic Runtime Parameters"
            ],
            [
              "/intro/installations/asset-chain-parameters.md",
              "Runtime Tools for Asset Chains"
            ]
          ]
        },
        {
          title: "CryptoConditions (Smart Contract Templates)",
          collapsable: true,
          children: [
            [
              "/intro/cryptoconditions/cryptoconditions-instructions.md",
              "Instructions for CryptoConditions"
            ],
            ["/intro/cryptoconditions/cc-channels.md", "Channels"],
            ["/intro/cryptoconditions/cc-dice.md", "Dice"],
            ["/intro/cryptoconditions/cc-faucet.md", "Faucet"],
            ["/intro/cryptoconditions/cc-gateways.md", "Gateways"],
            ["/intro/cryptoconditions/cc-oracles.md", "Oracles"],
            ["/intro/cryptoconditions/cc-rewards.md", "Rewards"],
            ["/intro/cryptoconditions/cc-tokens.md", "Tokens"]
          ]
        },
        {
          title: "Essential RPC Calls",
          collapsable: true,
          children: [
            ["/intro/essential-rpc/address-index.md", "Address"],
            ["/intro/essential-rpc/blockchain.md", "Blockchain"],
            ["/intro/essential-rpc/control.md", "Control"],
            ["/intro/essential-rpc/disclosure.md", "Disclosure"],
            ["/intro/essential-rpc/generate.md", "Generate"],
            ["/intro/essential-rpc/mining.md", "Mining"],
            ["/intro/essential-rpc/jumblr.md", "Jumblr"],
            ["/intro/essential-rpc/network.md", "Network"],
            ["/intro/essential-rpc/rawtransactions.md", "Raw Transactions"],
            ["/intro/essential-rpc/util.md", "Util"],
            ["/intro/essential-rpc/wallet.md", "Wallet"]
          ]
        }
      ],
      "/bsk/": ["", "create-kic.md", "insight-explorer.md"],
      // fallback
      "/": ["" /* / */, "/intro/start-here/introduction.md"]
    }
  }
};
