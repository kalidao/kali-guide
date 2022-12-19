# ✍️ Create Wrapprs

The Wrappr app allows you to deploy your own NFT minter via the [Create](https://www.wrappr.wtf/create) tab.

There is no permission necessary. Whatever you want to build will be shown in the [Wrappr gallery](https://www.wrappr.wtf/1/explore).

Features:

Attach a brand image that will be the default for all token Ids minted. Each Id can also be branded by the `admin`.

A `name` and `symbol` can be stamped into the NFT contract to make minting purpose more clear. 

The `description` field will be legible in NFT galleries (attached to the NFT metadata). As Wrappr is purpose-built for on-chain agreements, we allow you to upload a PDF attachment that will be linked to each minted NFT.

The `admin` role allows access to minting and updating the settings of your Wrappr, such as the 'minting fee' (`mintFee`) which is set on deployment (and denominated in ETH). 

If the minting fee is set very high, the Wrappr is effectively private and mints can only occur through the admin or manager roles. If the `admin` is set to 0x00, then there is effectively no permissioning and minting is fully public.

You can also include multiple `traits` which can be references to things like registration numbers, geographical coordinates, or other legal aspects of the NFTs that you want to highlight. These will show up in NFT galleries and wallets and make it easier to quickly scan and understand your Wrappr.

[Tutorial](https://www.loom.com/share/7189eba723d44208a0f04a0f0281dddf)
