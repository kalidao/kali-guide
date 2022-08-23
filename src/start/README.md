# WTF is Wrappr?

[Wrappr](https://app.wrappr.wtf/) is a Legal NFT minter and gallery, starting with some premade *[legal wrappers](https://www.paradigm.xyz/2022/06/legal-options-for-daos)* for wallets and DAOs. It gives attorneys and creative drafters the power to plug agreements into permission(able) NFTs and get paid for their awesome open source work.

Wrappr is [multi-chain](https://github.com/kalidao/wrappr-ui/blob/main/src/constants/deployments.ts) and deployed on Ethereum, Arbitrum (including Nova), Optimism, Polygon, Gnosis, Fantom, Avalanche, Binance Smart Chain and Goerli (testnet). Using CREATE2, all Wrappr assets will share the same address on every chain.

Sections in this explainer guide are excerpted from the [Paradigm Legal Matrix](https://daos.paradigm.xyz/).

# Ok, WTF is a Legal NFT?

A token that holds metadata that represents legal rights or formation filings with jurisdictions. 

These NFTs can also be programmed to respect transfer restrictions, hold user-specific metadata, and involve layered authorizations in order to more easily integrate with the legal system. 

The [Wrappr contract](https://github.com/kalidao/wrappr/blob/main/contracts/Wrappr.sol) was inspired by the Tokensoft security token implementation ([EIP-1404](https://erc1404.org/)) with the elaboration of [Compound-style governance](https://github.com/compound-finance/compound-protocol/tree/master/contracts/Governance) and the [ERC-1155 multi-token standard](https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/). They are therefore DAO primitives themselves in addition to being legal wrappers, and the first implementation of a voting ERC-1155.

# Premades

The [KALI](https://www.kali.gg/) legal engineering team has drafted forms of Wrappr NFT templates that can mint to provide legal protection and certainty to Ethereum and other EVM users.

Delaware and Wyoming have been selected initially for their robust corporate law and DAO sophistication.

## LLC

![image](https://user-images.githubusercontent.com/92001561/186155486-cc3080ef-4555-4b2d-a254-f242b3afa753.png)

*Anyone can attach an LLC to their wallet, multi-sig or DAO to make agreements and protect their personal assets from their web3 activities.*

The limited liability company ([LLC](https://mirror.xyz/kalico.eth/vqfVO70rkW3_D7MQA7oKlcf5yErlHt2mRUsY62hNkT0)) was a game changer for entity formation. Established in Wyoming in 1977, it offers a hybrid of partnerships and corporations that gives flexibility for members to decide on their taxation status and determine their rights largely through private operating agreements. They are typically anonymous, with only a registered agent and organizer being known to the State and general public.

Delaware extended this internet-friendly format with the creation of the [Series LLC](https://mirror.xyz/kalico.eth/PjwUyaJsHZIvJ3RfSMghcw_FS1ohrrQuXmD9XI5GJtk) concept, which allows a single filing to franchise out separate LLCs under a "master" operating agreement.

[LexDAO](https://www.lexdao.coop/) engineers derived a technique called [Ricardian LLC](https://ricardian.gitbook.io/ricardian-llc/) that leveraged the ease of formation offered by Delaware Series LLC law but [ensured separation of concerns](https://delawarebusinesstimes.com/sponsored-content/bizinsights/future-blockchain-blockchain-ledgers-help-protect-assets-within-delaware-series-llc/) through the use of NFTs, which guarantees uniqueness for associated entities through each tokenId.

If users select Delaware or Wyoming LLC as an option through the [Wrappr app](https://app.wrappr.wtf/), they will receive a mint on an ERC-1155 token that has a sub-Series LLC agreement attached and completed through the terms of the master operating agreement with qualified code deference, stored on Ethereum and IPFS ([Delaware copy](https://del.llc.wrappr.documen.eth.link/), [Wyoming copy](https://wy.llc.wrappr.documen.eth.link/)).

Creation of a bank account and obtaining an EIN for off-chain matters can be handled by the [LexDAO Clinic](https://j6dn81d0m26.typeform.com/to/BXwMVdWX).

The maintenance of the Wrappr LLC filings, registered agent and annual State franchise tax is handled by the [KALI](https://www.kali.gg/) team for the public benefit.

Examples of DAO LLCs in the wild include [MetaCartel Ventures](https://github.com/metacartel/MCV/blob/master/Legal/Grimoire%20and%20Exhibits/MCV-Grimoire-Final-All-Exhihbits.pdf) and [The LAO](https://medium.com/openlawofficial/the-lao-a-for-profit-limited-liability-autonomous-organization-9eae89c9669c) investment clubs.

## UNA

![image](https://user-images.githubusercontent.com/92001561/186155339-ce520914-4cb0-46f7-bb17-3696d0093327.png)

*Anyone can attach a UNA to their wallet, multi-sig or DAO to protect their personal assets from their web3 activities and qualify for tax benefits as a 501(c)(3) or other advantaged entity.*

An unincorporated non-profit association (UNA) is a format for protecting assets and giving a legal identity to projects serving a social purpose. Open source software projects and others that benefit the public over generating profits can qualify as an UNA under state law. 

UNAs can be created by two or more members through agreement without the need for state filing. They therefore are friendly alternatives to formal registration as a legal entity with the State with many of the same benefits but also greater anonymity for members. 

Wrappr provides a form of UNA agreement that is drafted to attach to 0x accounts through minting an NFT and provide qualified code deference, stored on Ethereum and IPFS ([Delaware copy](https://del.una.wrappr.documen.eth.link/), [Wyoming copy](https://wy.una.wrappr.documen.eth.link/)).

Examples of DAO UNAs in the wild include [Idle DAO](https://gov.idle.finance/t/legal-structure-for-the-idle-dao/682) and [LexDAO](https://lexdao.coop/). [Legal authors](https://github.com/LeXpunK-Army/LeXpunK_DAO_Defense_Protocol/blob/main/Operator's%20Manual%20-%20LeXpunK%20Legal%20Defense%20Protocol.pdf) have also argued that groups defined by a notable public purpose and organized via smart contracts should already have limited liability for their membership as UNA, such as the original [Moloch DAO](https://molochdao.com/) (nonetheless, it is the position of KALI team that clarifying this purpose and rules through use of a UNA Wrappr NFT is best of both worlds). A template for DAO charter with qualified code deference is [stored on Ethereum and IPFS] (https://charter.wrappr.documen.eth.link/).

If an UNA agreement is silent, [model law](https://www.uniformlaws.org/viewdocument/final-act-149?CommunityKey=40227d3a-8b5d-47c2-8cd0-b0ec12da97f9&tab=librarydocuments) prohibits transfers of membership interests by default.

Care should be taken when distributing assets to UNA members as this may prevent it from retaining its limited liability as a non-profit venture. Note, however, UNAs may engage in activities that produce profit so long as they are in furtherance of the non-profit purpose.

## DAO Charter

![image](https://user-images.githubusercontent.com/92001561/186155234-6099e490-b635-4b0f-a583-425f41f47974.png)

*Excerpted from LeXpunK Defense Protocol [Operator Manual](https://github.com/LeXpunK-Army/LeXpunK_DAO_Defense_Protocol/blob/main/Operator's%20Manual%20-%20LeXpunK%20Legal%20Defense%20Protocol.pdf)*

The [LeXpunK Model DAO Charter](https://dev.wrappr.wtf/wrappr/1/0xa958f8d815a037e8ede8194dad70f9a3f3f94041) is intended for unincorporated DAOs that wish to seek to put in place risk mitigation measures against some of the risks of vicarious liability and potential intra-DAO fiduciary duty claims that may arise in unincorporated associations.

The DAO Charter utilizes a “qualified code deference” philosophy of DAO participation, in which DAO members agree that, to the maximum extent permitted by law, the results of the operation of the relevant smart contract system should be legally binding on all the DAO members. This would entail, for example, that non-developer DAO members cannot sue developer DAO members as the result of a code or design error enabling an economic exploit in which DAO members suffered financial losses. 

Optionally, the DAO Charter can provide that code will not be deferred to in the event of “Material Adverse Exception Events”--a term which can and should be customized for each DAO, but which may, for example, provide that the DAO members need not defer to the outcome of the smart contract system to the extent it was adversely affected by a consensus attack on the underlying blockchain system.

The other main purpose of the DAO Charter is to opt out of some of the adverse consequences of potential partnership status. Although the aspects of a partnership pertaining to liability of partners to third parties (e.g., joint and several liability for the actions of the partnership) cannot be opted out of, nevertheless, a partnership agreement may waive, limit or modify the partnership rules pertaining to the rights, duties and liabilities among the partners. The DAO Charter uses this contractual flexibility to:

* disclaim and waive any fiduciary duties owed by DAO members to one another that might otherwise be implied by the existence of the DAO;

* disclaim any right of DAO members to represent one another, or bind one another to liabilities, that might otherwise be implied by the existence of the DAO; and

* disclaim any property right any individual DAO member might otherwise be implied to have in any DAO-controlled assets (e.g., rights of co-tenants as discussed above), other than once those assets are distributed to DAO members by the smart contract system.

# Create

![image](https://user-images.githubusercontent.com/92001561/185824141-0ca61586-3baf-48b0-b262-01824c3f4234.png)

The Wrappr app allows users to deploy their own Wrappr NFT contract via the [Create](https://app.wrappr.wtf/create) tab. 

Users are able to attach a base image that will be the default for all token Ids minted. 

Further, a `name` and `symbol` can be stamped into the contract to make minting purpose more clear. 

The `description` field will be legible in NFT galleries (attached to the NFT metadata). 

Finally, an `admin` role can be given that allows access to minting and updating the settings of the Wrappr, such as the 'minting fee' (`mintFee`) which is set on deployment (and denominated in ETH). 

If the minting fee is set very high, the Wrappr is effectively private and mints can only occur through the admin or manager roles. If the `admin` is set to 0x00, then there is effectively no permissioning.

# Explore

![image](https://user-images.githubusercontent.com/92001561/185830304-698a4c2b-1da2-4a12-93d4-edec8830b940.png)

The [Explore tab](https://app.wrappr.wtf/explore) allows users to review public mintable Wrapprs. After paying the minting fee, the user can send a Wrappr NFT to their chosen account, such as a DAO or multi-sig. These NFTs will be viewable on other NFT gallery sites such as [OpenSea](https://opensea.io/) and [LooksRare](https://looksrare.org/), as well as the user's wallet, such as [Rainbow](https://rainbow.me/).

![image](https://user-images.githubusercontent.com/92001561/185830350-dcaaad99-b17a-4a04-aa2a-03c2df5ede25.png)

