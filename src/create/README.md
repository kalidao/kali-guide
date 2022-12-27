# ✍️ Create Wrapprs

The Wrappr app allows you to deploy your own Wrappr NFT minter via the [Create](https://www.wrappr.wtf/create) tab.

All Wrappr deployments will be shown in the [Wrappr gallery](https://www.wrappr.wtf/1/explore) and mints will show up in wallets and NFT marketplaces.

## Features:

Brand images will be the default for all token Ids minted. Each Id can also be branded by the `admin` role set on creation.

A `name` and `symbol` are stamped into the NFT contract to add more context to each Wrappr. 

The `description` field will be legible in NFT galleries (attached to the NFT metadata). As the Wrappr app is purpose-built for on-chain agreements, you can attach a PDF that will be linked to each minted NFT.

The `admin` role grants a trusted authority (typically the author) access to minting and settings in a Wrappr, such as the 'minting fee' (`mintFee`) which is set on deployment (and denominated in ETH). 

Note: If the minting fee is set very high, a Wrappr is effectively private as mints can only occur through the admin or manager roles. If the `admin` is set to 0x00, then there is effectively no permissioning and minting is fully public.

In deploying a Wrappr, you can also include multiple `traits` which can be references to things like registration numbers, geographical coordinates, or other legal aspects of the NFTs that you want to highlight.

[Tutorial](https://www.loom.com/share/7189eba723d44208a0f04a0f0281dddf)
