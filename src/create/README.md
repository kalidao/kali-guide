# Create

![image](https://user-images.githubusercontent.com/92001561/185824141-0ca61586-3baf-48b0-b262-01824c3f4234.png)

The Wrappr app allows users to deploy their own Wrappr NFT contract via the [Create](https://app.wrappr.wtf/create) tab. 

Users are able to attach a base image that will be the default for all token Ids minted. 

Further, a `name` and `symbol` can be stamped into the contract to make minting purpose more clear. 

The `description` field will be legible in NFT galleries (attached to the NFT metadata). 

Finally, an `admin` role can be given that allows access to minting and updating the settings of the Wrappr, such as the 'minting fee' (`mintFee`) which is set on deployment (and denominated in ETH). 

If the minting fee is set very high, the Wrappr is effectively private and mints can only occur through the admin or manager roles. If the `admin` is set to 0x00, then there is effectively no permissioning. 
