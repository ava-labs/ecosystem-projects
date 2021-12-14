![AvalancheLogoRed](https://user-images.githubusercontent.com/91836041/145524214-bf21f7ae-8ae4-4a89-86f0-7630e5220cba.png)



# Avalanche Ecosystem

Need Image from design team

Welcome to The Avalanche Ecosystem- This repository is the source data for The Avalanche Ecosystem, located here <https://ecosystem.avax.network/>.

If you are interested in adding your project to the Avalanche Ecosystem page, please follow the guidelines below. Please ensure complete accuracy with all form questions. Inaccurate or incomplete submissions will not be accepted.

# Submission Guidelines

The are 3 steps to submit a project. Create a pull request composed of two filesgs. And submit a typeform.
  1. In the `projects` directory include the project info listed below. Name the file {{slug}}.json
  2. In the `img` directory include an image to represent your project.
  3. Submit the project's information via the following link https://admin.typeform.com/form/zVdwa3z0/create?block=2e46ebb7-b240-4c58-b1fe-21abe4dab804. 

Submissions that do not perform all 3 steps will not be considered.

If your project already exists in the `projects` direct, don't re-submit the project details. Instead edit the original file and/or the logos in a new pull request. Please re-submit a typeform each time you project is edited.

## Project Info Submission

### **Required Fields**

- `name`: The name of the project.
- `slug`: A unique project identifier with no spaces.
- `date`: The date of project implementation. Format `yyyy-mm-dd`.
- `highlight`: A 1-2 sentence summary of the project and its offering in the Avalanche ecosystem.
- `logo`: A path for the logomark for the project.
- `tags`: From the list below, provide a comma separated list of categories that best describe the project. Minimum of 1 and maximum 4 tags.
- `status`: The development stage of the project- `live`,`coming soon`, or `terminated`.
- `website`: A URL for the project's website to direct users towards.
- `twitter`: The URL for the project's Twitter.
- `summary`: A public summary of the project. Limited to 200 words. Provide an accurate description of the project to help users understand the offering.

### **Optional Fields**

- `telegram`: The URL for the project's Telegram channel.
- `discord`: The URL for the project's Discord channel.
- `docs`: The URL for the project's public documents.
- `github`: The URL for the project's github.
- `token`: The symbol of the project's specifically associated Avalanche token, only if applicable. If the token is wrapped for Avalanche, please indicate the wrapped token symbol.
- `cmc`: The URL for the project's token price tracker, only if applicable. e.g. coinmarketcap, coingecko, etc...

### Image Criteria
- All image files must be 80x80px / at an aspect ratio of ~1.
- Only .svg, and .png files are accepted.
- Please do not use SVGs with embedded PNG or JPG images.
- The image should be round for the best display result. A round mask will be applied when deployed, so non-round images will have edges cut off.


### Example File 

```json
{
  "name": "Avalanche Bridge",
  "slug": "avalanche-bridge",
  "date": "2021-07-29",
  "highlight": "Avalanche's official bridge- providing a fast, low cost, and secure means to move assets between chains.",
  "logo": "/img/avalanche-bridge.png",
  "tags": ["ava-labs","bridge","multi-chain"],
  "status": "live",
  "website": "https://bridge.avax.network/",
  "twitter": "https://twitter.com/avalancheavax",
  "summary": "The Avalanche Bridge (AB) is a low cost, low latency, and secure way to transfer assets from one blockchain to another. Leveraging Intel SGX and built on the back of Avalanche’s low energy and high TPS consensus algorithm, the AB provides users a smooth, quick, and inexpensive experience. Currently supporting the movement of ERC20’s from Ethereum onto the Avalanche C-Chain and back, Ava Labs has plans to advance the bridge further and increase the number of connected chains. Ava Labs designed the Avalanche Bridge on the principles that transactions across the bridge will be secure and finality will be swift. This makes Avalanche’s official bridge one of the best options to move assets onto the Avalanche C-Chain. Good Bridging.",
  "telegram": "https://t.me/avalancheavax",
  "discord": "https://t.me/avalancheavax",
  "docs":"https://docs.avax.network/learn/avalanche-bridge-faq",
  "github":"https://github.com/ava-labs",
  "token":"AVAX",
  "cmc":"https://coinmarketcap.com/currencies/avalanche/"
  
}
```

### Tags
Currently available categories to classify the project are listed below. Please only use maximum 4 of the options and avoid typos.

```text
accelerator
amm
api
art
ava labs
avalanche native
bridge
cex
culture
custody
dao
dapp
dashboard
defi
dex
digital securities
ecosystem
exchange
explorer
fiat ramp
funds
gaming
governance
government
incubators
industry
infrastructure
institutional 
launchpads
lending
marketplace
multi-chain
news
nft
nodes
non-profit
options
oracle
payments
play-to-earn
portfolio
sdk
security
stablecoin
stats
swap
tools
trading
utility
wallet
wealth management
yield farming
```

## Questions

If there are any questions regarding submission please contact projectdirectory@avalabs.org.
