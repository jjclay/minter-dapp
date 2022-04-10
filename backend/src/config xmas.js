require('dotenv').config();
const basePath = process.cwd();
const fs = require("fs");
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "virtually black & white xmas";
const description = "A unique collection of black & white xmas themed images created using 7 different lines and shapes.";
const baseUri = "ipfs://NewUriToReplace"; // This will be replaced automatically

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [


  // 2 rare black tree with green ornament
  {
    growEditionSizeTo: 2,
    layersOrder: [
      
      { name: "black/theme color" },
      { name: "black/background" },
      { name: "black/locations/top 64" },
      { name: "black/locations/top 32" },
      { name: "black/locations/bottom 64" },
      { name: "black/locations/bottom 32" },
      { name: "black/locations/center" },
      { name: "black/tree 1/tree rare" },
      { name: "black/tree 1/star" },
      { name: "black/tree 1/ornament rare" },
      { name: "black/tree 1/trunk" },
      { name: "black/tree 1/tinsel top" },
      { name: "black/tree 1/tinsel middle" },
      { name: "black/tree 1/tinsel bottom" },
      
    ],
  },



  {
    growEditionSizeTo: 12,
    layersOrder: [
      
      { name: "black/theme color" },
      { name: "black/background" },
      { name: "black/locations/center" },
      { name: "black/frame" },
      { name: "black/tree 1/tree" },
      { name: "black/tree 1/star" },
      { name: "black/tree 1/ornament" },
      { name: "black/tree 1/trunk" },
      
    ],
  },

  {
    growEditionSizeTo: 22,
    layersOrder: [
      
      { name: "black/theme color" },
      { name: "black/background" },
      { name: "black/locations/top 64" },
      { name: "black/locations/top 32" },
      { name: "black/locations/center" },
      { name: "black/locations/bottom 64" },
      { name: "black/locations/bottom 32" },
      { name: "black/tree 1/tree" },
      { name: "black/tree 1/star" },
      { name: "black/tree 1/ornament" },
      { name: "black/tree 1/trunk" },
      
    ],
  },

  {
    growEditionSizeTo: 32,
    layersOrder: [
      
      { name: "black/theme color" },
      { name: "black/background" },
      { name: "black/locations/top 128" },
      { name: "black/locations/top 64" },
      { name: "black/locations/center" },
      { name: "black/locations/bottom 128" },
      { name: "black/locations/bottom 32" },
      { name: "black/tree 1/tree" },
      { name: "black/tree 1/star" },
      { name: "black/tree 1/ornament" },
      { name: "black/tree 1/trunk" },
      
    ],
  },

    // 2 rare white tree with green ornament
    {
      growEditionSizeTo: 34,
      layersOrder: [
        
        { name: "white/theme color" },
        { name: "white/background" },
        //{ name: "white/frame" },
        //{ name: "white/locations/top 64" },
        { name: "white/locations/top 32" },
        //{ name: "white/locations/bottom 64" },
        { name: "white/locations/bottom 32" },
        { name: "white/locations/center rare" },
        
        { name: "white/tree 1/tree rare" },
        { name: "white/tree 1/star" },
        { name: "white/tree 1/ornament rare" },
        { name: "white/tree 1/trunk" },
        { name: "white/tree 1/tinsel top" },
        { name: "white/tree 1/tinsel middle" },
        { name: "white/tree 1/tinsel bottom" },
        
      ],
    },

  {
    growEditionSizeTo: 44,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      { name: "white/locations/center" },
      { name: "white/frame" },
      { name: "white/tree 1/tree" },
      { name: "white/tree 1/star" },
      { name: "white/tree 1/ornament" },
      { name: "white/tree 1/trunk" },
      
    ],
  },

  {
    growEditionSizeTo: 54,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      { name: "white/locations/top 64" },
      { name: "white/locations/top 32" },
      { name: "white/locations/center" },
      { name: "white/locations/bottom 64" },
      { name: "white/locations/bottom 32" },
      { name: "white/tree 1/tree" },
      { name: "white/tree 1/star" },
      { name: "white/tree 1/ornament" },
      { name: "white/tree 1/trunk" },
      
    ],
  },

  {
    growEditionSizeTo: 64,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      { name: "white/locations/top 128" },
      { name: "white/locations/top 64" },
      { name: "white/locations/center" },
      { name: "white/locations/bottom 64" },
      { name: "white/locations/bottom 32" },
      { name: "white/tree 1/tree" },
      { name: "white/tree 1/star" },
      { name: "white/tree 1/ornament" },
      { name: "white/tree 1/trunk" },
      
    ],
  },
 
 
  
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 384,
  height: 512,
  smoothing: false,
};

const extraMetadata = {
  external_url: "https://virtuallyblackandwhite.art", // Replace with your website or remove this line if you do not have one.
};

// NFTPort Info

// ** REQUIRED **
const AUTH = process.env.NFTPORT_API_KEY; // Set this in the .env file to prevent exposing your API key when pushing to Github
const LIMIT = 2; // Your API key rate limit
const CHAIN = 'rinkeby'; // only rinkeby or polygon

// REQUIRED CONTRACT DETAILS THAT CANNOT BE UPDATED LATER!
const CONTRACT_NAME = 'virtually black & white xmas';
const CONTRACT_SYMBOL = 'VBWX';
const METADATA_UPDATABLE = true; // set to false if you don't want to allow metadata updates after minting
const OWNER_ADDRESS = '0x919462C6305b228195DdCE4C109a6f9b141B3796';
const TREASURY_ADDRESS = '0x919462C6305b228195DdCE4C109a6f9b141B3796';
const MAX_SUPPLY = 5000; // The maximum number of NFTs that can be minted. CANNOT BE UPDATED!
const MINT_PRICE = 1; // Minting price per NFT. Rinkeby = ETH, Polygon = MATIC. CANNOT BE UPDATED!
const TOKENS_PER_MINT = 10; // maximum number of NFTs a user can mint in a single transaction. CANNOT BE UPDATED!

// REQUIRED CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PUBLIC_MINT_START_DATE = "2022-03-20T11:30:48+00:00"; // This is required. Eg: 2022-02-08T11:30:48+00:00

// OPTIONAL CONTRACT DETAILS THAT CAN BE UPDATED LATER.
const PRESALE_MINT_START_DATE = null; // Optional. Eg: 2022-02-08T11:30:48+00:00
const ROYALTY_SHARE = 1000; // Percentage of the token price that goes to the royalty address. 100 bps = 1%
const ROYALTY_ADDRESS = "0x919462C6305b228195DdCE4C109a6f9b141B3796"; // Address that will receive the royalty
const BASE_URI = null; // only update if you want to manually set the base uri
const PREREVEAL_TOKEN_URI = null; // only update if you want to manually set the prereveal token uri
const PRESALE_WHITELISTED_ADDRESSES = []; // only update if you want to manually set the whitelisted addresses

// ** OPTIONAL **
let CONTRACT_ADDRESS = "YOUR CONTRACT ADDRESS"; // If you want to manually include it

// Generic Metadata is optional if you want to reveal your NFTs
const GENERIC = true; // Set to true if you want to upload generic metas and reveal the real NFTs in the future
const GENERIC_TITLE = CONTRACT_NAME; // Replace with what you want the generic titles to say if you want it to be different from the contract name.
const GENERIC_DESCRIPTION = "REPLACE THIS"; // Replace with what you want the generic descriptions to say.
const GENERIC_IMAGE = "https://ipfs.io/ipfs/QmUf9tDbkqnfHkQaMdFWSGAeXwVXWA61pFED7ypx4hcsfh"; // Replace with your generic image that will display for all NFTs pre-reveal.

// Automatically set contract address if deployed using the deployContract.js script
try {
  const rawContractData = fs.readFileSync(
    `${basePath}/build/contract/_contract.json`
  );
  const contractData = JSON.parse(rawContractData);
  if (contractData.response === "OK" && contractData.error === null) {
    CONTRACT_ADDRESS = contractData.contract_address;
  }
} catch (error) {
  // Do nothing, falling back to manual contract address
}
// END NFTPort Info

const solanaMetadata = {
  symbol: "YC",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/c/hashlipsnft",
  creators: [
    {
      address: "7fXNuer5sbZtaTEPhtJ5g5gNtuyRoKkvxdjEjEnPN4mC",
      share: 100,
    },
  ],
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
  AUTH,
  LIMIT,
  CONTRACT_ADDRESS,
  OWNER_ADDRESS,
  TREASURY_ADDRESS,
  CHAIN,
  GENERIC,
  GENERIC_TITLE,
  GENERIC_DESCRIPTION,
  GENERIC_IMAGE,
  CONTRACT_NAME,
  CONTRACT_SYMBOL,
  METADATA_UPDATABLE,
  ROYALTY_SHARE,
  ROYALTY_ADDRESS,
  MAX_SUPPLY,
  MINT_PRICE,
  TOKENS_PER_MINT,
  PRESALE_MINT_START_DATE,
  PUBLIC_MINT_START_DATE,
  BASE_URI,
  PREREVEAL_TOKEN_URI,
  PRESALE_WHITELISTED_ADDRESSES
};