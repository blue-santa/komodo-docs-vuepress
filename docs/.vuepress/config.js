module.exports = {
  title: "Komodo Developer Documentation",
  base: "/komodo-docs-vuepress/",
  description: "Documentation for developers building on Komodo",
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [{
        text: "Start Here",
        link: "/basic-docs/"
      },
      {
        text: "KomodoPlatform.com",
        link: "https://komodoplatform.com"
      }
    ],
    sidebar: {
      "/basic-docs/": [{
          title: "Start Here",
          collapsable: true,
          children: [
            ["/basic-docs/", "Introduction"],
            [
              "/basic-docs/start-here/outline-for-new-developers.md",
              "Outline for New Developers"
            ],
            [
              "/basic-docs/start-here/cc-overview.md",
              "Overview of Crypto Conditions (Smart Contracts)"
            ]
          ]
        },
        {
          title: "Installation and Setup",
          collapsable: true,
          children: [
            [
              "/basic-docs/installations/basic-instructions.md",
              "Basic Installation Instructions"
            ],
            [
              "/basic-docs/installations/creating-asset-chains.md",
              "Asset Chain Creation"
            ],
            [
              "/basic-docs/installations/common-runtime-parameters.md",
              "Basic Runtime Parameters"
            ],
            [
              "/basic-docs/installations/asset-chain-parameters.md",
              "Runtime Tools for Asset Chains"
            ]
          ]
        },
        {
          title: "Crypto Conditions (Smart Contracts)",
          collapsable: true,
          children: [
            [
              "/basic-docs/cryptoconditions/cryptoconditions-instructions.md",
              "Instructions for Crypto Conditions"
            ],
            ["/basic-docs/cryptoconditions/cc-dice.md", "Channels"],
            ["/basic-docs/cryptoconditions/cc-dice.md", "Dice"],
            ["/basic-docs/cryptoconditions/cc-faucet.md", "Faucet"],
            ["/basic-docs/cryptoconditions/cc-gateways.md", "Gateways"],
            ["/basic-docs/cryptoconditions/cc-oracles.md", "Oracles"],
            ["/basic-docs/cryptoconditions/cc-rewards.md", "Rewards"],
            ["/basic-docs/cryptoconditions/cc-tokens.md", "Tokens"]
          ]
        },
        {
          title: "Essential RPC Calls",
          collapsable: true,
          children: [
            ["/basic-docs/essential-rpc/address-index.md", "Address"],
            ["/basic-docs/essential-rpc/blockchain.md", "Blockchain"],
            ["/basic-docs/essential-rpc/control.md", "Control"],
            ["/basic-docs/essential-rpc/disclosure.md", "Disclosure"],
            ["/basic-docs/essential-rpc/generate.md", "Generate"],
            ["/basic-docs/essential-rpc/mining.md", "Mining"],
            ["/basic-docs/essential-rpc/jumblr.md", "Jumblr"],
            ["/basic-docs/essential-rpc/network.md", "Network"],
            ["/basic-docs/essential-rpc/rawtransactions.md", "Raw Transactions"],
            ["/basic-docs/essential-rpc/util.md", "Util"],
            ["/basic-docs/essential-rpc/wallet.md", "Wallet"]
          ]
        }
      ],
      "/bsk/": [{
          title: "Initialising a Blockchain",
          collapsable: true,
          children: [
            ["/bsk/create-kic.md", "Create a Komodo based Independent Chain"],
          ]
        },
        {
          title: "Launching an Explorer",
          collapsable: true,
          children: [
            ["/bsk/create-kic.md", "Create a Komodo based Independent Chain"],
          ]
        },
        {
          title: "Setting up Electrums",
          collapsable: true,
          children: [
            ["/bsk/create-kic.md", "Create a Komodo based Independent Chain"],
          ]
        },
        {
          title: "Getting listed in Komodo's Multicoin wallet",
          collapsable: true,
          children: [
            ["/bsk/create-kic.md", "Create a Komodo based Independent Chain"],
          ]
        },
        {
          title: "Geting Listed in Komodo's DEX",
          collapsable: true,
          children: [
            ["/bsk/create-kic.md", "Create a Komodo based Independent Chain"],
          ]
        },
        {
          title: "Get your Blockchain secured by Bitcoin's hashpower",
          collapsable: true,
          children: [
            ["/bsk/create-kic.md", "Create a Komodo based Independent Chain"],
          ]
        },
      ],
      "/": ["", "/basic-docs/"]
    }
  }
};