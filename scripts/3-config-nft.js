import sdk from "./1-initialize-sdk.js";
import { readFileSync } from "fs";

const bundleDrop = sdk.getBundleDropModule(
  "0x8E8B5703239862b02a9cd5C0A5265c8b4971369F",
);

(async () => {
  try {
    await bundleDrop.createBatch([
      {
        name: "Moonman badge",
        description: "This NFT will give you access to MoonmenDao!",
        image: readFileSync("scripts/assets/badge.png"),
      },
    ]);
    console.log("✅ Successfully created a new NFT in the drop!");
  } catch (error) {
    console.error("failed to create the new NFT", error);
  }
})()