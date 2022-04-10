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




  // 1 with frame
  {
    growEditionSizeTo: 1,
    layersOrder: [
      
      { name: "black/theme color" },
      { name: "black/background" },
      { name: "black/frame" },
      { name: "black/shapes/lines diagonal shooting" },
      { name: "black/stickmen/head" },
      { name: "black/stickmen/eyes" },
      { name: "black/stickmen/body" },
      { name: "black/stickmen/left arm" },
      { name: "black/stickmen/right arm" },
      { name: "black/stickmen/left leg" },
      { name: "black/stickmen/right leg" },
      
    ],
  },


  // trump
  {
    growEditionSizeTo: 2,
    layersOrder: [
      
      { name: "black/theme color" },
      { name: "black/background" },
      { name: "black/stickmen/jail bars trump" },
      { name: "black/locations/top 64" },
      { name: "black/locations/top 32" },
      { name: "black/locations/bottom 64" },
      { name: "black/locations/bottom 32" },
      { name: "black/stickmen/head trump" },
      { name: "black/stickmen/hair trump" },
      { name: "black/stickmen/eyes trump" },
      { name: "black/stickmen/eyebrows trump" },
      { name: "black/stickmen/mouth trump" },
      { name: "black/stickmen/body" },
      { name: "black/stickmen/left arm trump" },
      { name: "black/stickmen/right arm trump" },
      { name: "black/stickmen/penis trump" },
      { name: "black/stickmen/left leg" },
      { name: "black/stickmen/right leg" },
      
    ],
  },

  // experiment with shapes and full screen
  {
    growEditionSizeTo: 10,
    layersOrder: [
      
      { name: "black/theme color" },
      { name: "black/background" },
      { name: "black/shapes/lines diagonal shooting" },
      
      { name: "black/shapes/diamonds" },
      
      
      { name: "black/stickmen/head" },
      { name: "black/stickmen/eyes" },
      { name: "black/stickmen/mouth" },
      { name: "black/stickmen/body" },
      { name: "black/stickmen/left arm" },
      { name: "black/stickmen/right arm" },
      { name: "black/stickmen/left leg" },
      { name: "black/stickmen/right leg" },
      
    ],
  },


  // experiment with yes and no attributes for traits (shapes)
  {
    growEditionSizeTo: 20,
    layersOrder: [
      
      { name: "black/theme color" },
      { name: "black/background" },
      { name: "black/shapes/lines diagonal shooting" },
      
      { name: "black/shapes/diamonds/top" },
      
      
      { name: "black/stickmen/head" },
      { name: "black/stickmen/eyes" },
      { name: "black/stickmen/mouth" },
      { name: "black/stickmen/body" },
      { name: "black/stickmen/left arm" },
      { name: "black/stickmen/right arm" },
      { name: "black/stickmen/left leg" },
      { name: "black/stickmen/right leg" },
      
    ],
  },

  {
    growEditionSizeTo: 25,
    layersOrder: [
      
      { name: "black/theme color" },
      { name: "black/background" },
      { name: "black/shapes/lines diagonal shooting" },
      
      { name: "black/locations/left 32" },
      { name: "black/locations/right 32" },
      { name: "black/locations/left 64" },
      { name: "black/locations/right 64" },
      { name: "black/locations/bottom 64" },
      { name: "black/locations/top 64" },
      { name: "black/locations/bottom 32" },
      { name: "black/locations/top 32" },
      
      { name: "black/stickmen/head" },
      { name: "black/stickmen/eyes" },
      { name: "black/stickmen/mouth" },
      { name: "black/stickmen/body" },
      { name: "black/stickmen/left arm" },
      { name: "black/stickmen/right arm" },
      { name: "black/stickmen/left leg" },
      { name: "black/stickmen/right leg" },
      
    ],
  },

  {
    growEditionSizeTo: 30,
    layersOrder: [
      
      { name: "black/theme color" },
      { name: "black/background" },
      { name: "black/locations/left 32" },
      { name: "black/locations/right 32" },
      { name: "black/locations/left 64" },
      { name: "black/locations/right 64" },
      { name: "black/locations/top 64" },
      { name: "black/locations/bottom 64" },
      { name: "black/locations/top 32" },
      { name: "black/locations/bottom 32" },
      { name: "black/stickmen/head" },
      { name: "black/stickmen/eyes" },
      { name: "black/stickmen/mouth" },
      { name: "black/stickmen/body" },
      { name: "black/stickmen/left arm" },
      { name: "black/stickmen/right arm" },
      { name: "black/stickmen/left leg" },
      { name: "black/stickmen/right leg" },
      
    ],
  },

  //32 on top of 64 with shooting diagonal lines and center
  {
    growEditionSizeTo: 40,
    layersOrder: [
      
      { name: "black/theme color" },
      { name: "black/background" },
      { name: "black/locations/center" },
      { name: "black/shapes/lines diagonal shooting" },
      
      { name: "black/locations/left 64" },
      { name: "black/locations/right 64" },
      { name: "black/locations/left 32" },
      { name: "black/locations/right 32" },
      { name: "black/locations/top 64" },
      { name: "black/locations/bottom 64" },
      { name: "black/locations/top 32" },
      { name: "black/locations/bottom 32" },
      { name: "black/stickmen/head" },
      { name: "black/stickmen/eyes" },
      { name: "black/stickmen/mouth" },
      { name: "black/stickmen/body" },
      { name: "black/stickmen/left arm" },
      { name: "black/stickmen/right arm" },
      { name: "black/stickmen/left leg" },
      { name: "black/stickmen/right leg" },
      
    ],
  },


  // 1 with frame
  {
    growEditionSizeTo: 41,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      { name: "white/frame" },
      { name: "white/shapes/lines diagonal shooting" },
      { name: "white/stickmen/head" },
      { name: "white/stickmen/eyes" },
      { name: "white/stickmen/body" },
      { name: "white/stickmen/left arm" },
      { name: "white/stickmen/right arm" },
      { name: "white/stickmen/left leg" },
      { name: "white/stickmen/right leg" },
      
    ],
  },

  // trump
  {
    growEditionSizeTo: 42,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      { name: "white/stickmen/jail bars trump" },
      { name: "white/locations/top 64" },
      { name: "white/locations/top 32" },
      { name: "white/locations/bottom 64" },
      { name: "white/locations/bottom 32" },
      { name: "white/stickmen/head trump" },
      { name: "white/stickmen/hair trump" },
      { name: "white/stickmen/eyes trump" },
      { name: "white/stickmen/eyebrows trump" },
      { name: "white/stickmen/mouth trump" },
      { name: "white/stickmen/body" },
      { name: "white/stickmen/left arm trump" },
      { name: "white/stickmen/right arm trump" },
      { name: "white/stickmen/penis trump" },
      { name: "white/stickmen/left leg" },
      { name: "white/stickmen/right leg" },
      
    ],
  },

   //32 on top of 64 with shooting diagonal lines
  {
    growEditionSizeTo: 50,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      { name: "white/shapes/lines diagonal shooting" },
      
      { name: "white/locations/left 64" },
      { name: "white/locations/right 64" },
      { name: "white/locations/left 32" },
      { name: "white/locations/right 32" },
      { name: "white/locations/top 64" },
      { name: "white/locations/bottom 64" },
      { name: "white/locations/top 32" },
      { name: "white/locations/bottom 32" },
      { name: "white/stickmen/head" },
      { name: "white/stickmen/eyes" },
      { name: "white/stickmen/mouth" },
      { name: "white/stickmen/body" },
      { name: "white/stickmen/left arm" },
      { name: "white/stickmen/right arm" },
      { name: "white/stickmen/left leg" },
      { name: "white/stickmen/right leg" },
      
    ],
  },

  //32 on top of 64 with no shooting diagonal lines
  {
    growEditionSizeTo: 60,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      
      { name: "white/locations/left 64" },
      { name: "white/locations/right 64" },
      { name: "white/locations/left 32" },
      { name: "white/locations/right 32" },
      { name: "white/locations/top 64" },
      { name: "white/locations/bottom 64" },
      { name: "white/locations/top 32" },
      { name: "white/locations/bottom 32" },
      { name: "white/stickmen/head" },
      { name: "white/stickmen/eyes" },
      { name: "white/stickmen/mouth" },
      { name: "white/stickmen/body" },
      { name: "white/stickmen/left arm" },
      { name: "white/stickmen/right arm" },
      { name: "white/stickmen/left leg" },
      { name: "white/stickmen/right leg" },
      
    ],
  },

  //64 on top of 32 with no shooting diagonal lines
  {
    growEditionSizeTo: 70,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      
      
      { name: "white/locations/left 32" },
      { name: "white/locations/right 32" },
      { name: "white/locations/left 64" },
      { name: "white/locations/right 64" },
      { name: "white/locations/top 32" },
      { name: "white/locations/bottom 32" },
      { name: "white/locations/top 64" },
      { name: "white/locations/bottom 64" },
      
      { name: "white/stickmen/head" },
      { name: "white/stickmen/eyes" },
      { name: "white/stickmen/mouth" },
      { name: "white/stickmen/body" },
      { name: "white/stickmen/left arm" },
      { name: "white/stickmen/right arm" },
      { name: "white/stickmen/left leg" },
      { name: "white/stickmen/right leg" },
      
    ],
  },

  //just 64 with no shooting diagonal lines
  {
    growEditionSizeTo: 80,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      { name: "white/locations/left 64" },
      { name: "white/locations/right 64" },
      { name: "white/locations/top 64" },
      { name: "white/locations/bottom 64" },
      
      { name: "white/stickmen/head" },
      { name: "white/stickmen/eyes" },
      { name: "white/stickmen/mouth" },
      { name: "white/stickmen/body" },
      { name: "white/stickmen/left arm" },
      { name: "white/stickmen/right arm" },
      { name: "white/stickmen/left leg" },
      { name: "white/stickmen/right leg" },
      
    ],
  },

  //just 32 with no shooting diagonal lines
  {
    growEditionSizeTo: 90,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      { name: "white/locations/left 64" },
      { name: "white/locations/right 64" },
      { name: "white/locations/top 64" },
      { name: "white/locations/bottom 64" },
      
      { name: "white/stickmen/head" },
      { name: "white/stickmen/eyes" },
      { name: "white/stickmen/mouth" },
      { name: "white/stickmen/body" },
      { name: "white/stickmen/left arm" },
      { name: "white/stickmen/right arm" },
      { name: "white/stickmen/left leg" },
      { name: "white/stickmen/right leg" },
      
    ],
  },


   // using shapes instead of locations 32 left and right
   {
    growEditionSizeTo: 100,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      
      { name: "white/shapes/squares/left 32" },
      { name: "white/shapes/squares/right 32" },
      { name: "white/shapes/squares/top" },
      { name: "white/shapes/squares/bottom" },
      { name: "white/stickmen/head" },
      { name: "white/stickmen/eyes" },
      { name: "white/stickmen/mouth" },
      { name: "white/stickmen/body" },
      { name: "white/stickmen/left arm" },
      { name: "white/stickmen/right arm" },
      { name: "white/stickmen/left leg" },
      { name: "white/stickmen/right leg" },
      
    ],
  },

  // using shapes instead of locations 64 left and right
  {
    growEditionSizeTo: 120,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
     
      { name: "white/shapes/squares/left 64" },
      { name: "white/shapes/squares/right 64" },
      { name: "white/shapes/squares/top" },
      { name: "white/shapes/squares/bottom" },
      { name: "white/stickmen/head" },
      { name: "white/stickmen/eyes" },
      { name: "white/stickmen/mouth" },
      { name: "white/stickmen/body" },
      { name: "white/stickmen/left arm" },
      { name: "white/stickmen/right arm" },
      { name: "white/stickmen/left leg" },
      { name: "white/stickmen/right leg" },
      
    ],
  },

  //no left or right with shooting diagonal lines and center
  {
    growEditionSizeTo: 130,
    layersOrder: [
      
      { name: "white/theme color" },
      { name: "white/background" },
      { name: "white/locations/center" },
      { name: "white/shapes/lines diagonal shooting" },
      { name: "white/locations/top 64" },
      { name: "white/locations/bottom 64" },
      { name: "white/locations/top 32" },
      { name: "white/locations/bottom 32" },
      { name: "white/stickmen/head" },
      { name: "white/stickmen/eyes" },
      { name: "white/stickmen/mouth" },
      { name: "white/stickmen/body" },
      { name: "white/stickmen/left arm" },
      { name: "white/stickmen/right arm" },
      { name: "white/stickmen/left leg" },
      { name: "white/stickmen/right leg" },
      
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
