## LLC

*Anyone can attach an LLC to their wallet, multi-sig or DAO to make agreements, interface with IRL and guard themselves against personal liability.*

### Background

The limited liability company ([LLC](https://mirror.xyz/kalico.eth/vqfVO70rkW3_D7MQA7oKlcf5yErlHt2mRUsY62hNkT0)) was a game changer for corporate law.

Established in Wyoming (1977), LLCs offer a hybrid of partnerships and corporations with flexibility to decide on taxation status and set membership and operating terms through private operating agreements. They are typically anonymous, with only a registered agent and organizer being known to the State and general public. They are therefore very suitable legal wrappers for DAOs and other organizations that wish to run on smart contracts.

Delaware extended this web3-friendly format with the creation of the [Series LLC](https://mirror.xyz/kalico.eth/PjwUyaJsHZIvJ3RfSMghcw_FS1ohrrQuXmD9XI5GJtk) concept, which allows a single filing to franchise out separate LLC "Series" under a "Master" operating agreement. (The Delaware corporate statute can be [reviewed here](https://law.justia.com/codes/delaware/2014/title-6/chapter-18/subchapter-ii/section-18-215).) 

This effectively means that each Series is its own LLC with separate rights and the ability to hold assets and make agreements in its own legal name. The Master only has rights against each Series based on the Master operating agreement that organizes this setup. While in traditional contexts, the Master might sponsor and be a member of each Series, for example, in purchasing and containerizing real assets like houses, the Wrappr LLC Master operating agreement (see below) excludes the Master from membership and dedicates its purpose only to maintaining registration of the collective. 

Series LLCs, again, exist in their own legal universe -- what happens with one Series will not affect another Series, as they are insulated. However, it is recommended to review the open questions and possible limitations on Series LLCs summarized by [KALI](https://kali.gg/) in this [legal research article](https://mirror.xyz/kalico.eth/PjwUyaJsHZIvJ3RfSMghcw_FS1ohrrQuXmD9XI5GJtk).

Wyoming later also adopted Series LLC into its corporate statutes, providing another strong choice for LLC DAOs. (The Wyoming corporate statute can be [reviewed here](https://law.justia.com/codes/wyoming/2018/title-17/chapter-29/article-2/section-17-29-211/).)

### Delaware & Wyoming Series LLCs - Differences

Delaware allows each Series to be identified by its own legal name as long as not otherwise registered with the state. In contrast, Wyoming [requires a specific format](https://sos.wyo.gov/Forms/WyoBiz/Series_LLC_Rules.pdf), such as `Wrappr LLC – [Your Name] – Series 1`.

Delaware does not require publication of Series and each does not need to even know of another's existence. Wyoming, however, requires notice to the state of each Series formation.

Delaware therefore is a simpler format for managing a Series LLC, but users might otherwise prefer Wyoming for jurisdiction and operating preferences. 

The Wrappr app and KALI team have legal software and automation processes to handle such naming and notice requirements on the backend (see below).

### Tokenized LLC Formation

[LexDAO](https://www.lexdao.coop/) engineers derived a technique called [*Ricardian LLC*](https://ricardian.gitbook.io/ricardian-llc/) that leverages the simple formation offered by Delaware Series LLCs but [ensures separation of concerns and legal validity](https://delawarebusinesstimes.com/sponsored-content/bizinsights/future-blockchain-blockchain-ledgers-help-protect-assets-within-delaware-series-llc/) through the use of NFTs and a closely tailored Master operating agreement, which demonstrates uniqueness for Series through each NFT tokenId and provides administrative safeguards.

#### Wrappr LLC NFT

Wrappr LLC NFTs have extended this concept with [ERC-1155](https://eips.ethereum.org/EIPS/eip-1155) NFTs to provide even more flexibility in tracking LLC membership with balances attached to each NFT tokenId. Wrappr LLC NFTs are also the backend for [KALI DAO deployments](https://app.kali.gg/) that choose an automated LLC legal structure.

If users select Delaware or Wyoming LLC as an option on the [Wrappr app](https://app.wrappr.wtf/), they will receive a mint on an ERC-1155 NFT that has a Series LLC agreement attached and completed through the terms of the Master operating agreement, stored and signable on Ethereum and IPFS under `ricardian.eth` ([Delaware copy](https://de.llc.ricardian.eth.limo/), [Wyoming copy](https://wy.llc.ricardian.eth.limo/)).

#### How Much Does It Cost?

Including gas fees to mint a Wrappr LLC NFT, the cost is roughly $25, which supports the maintenance of the Series LLC registrations with the state and ensuring the operating agreements are valid under applicable laws, which may change from time to time.

### DAOs & LLCs

LLCs can operate on behalf of an organization whose rules and finances are handled entirely by smart contracts with open hierarchies, or "[DAOs](https://ethereum.org/en/dao/)". 

A Wrappr user might in this case attach an LLC NFT to their wallet or multi-sig and use this account to receive funds from a DAO treasury to purchase IRL assets or pay expenses on behalf of the DAO. The LLC will protect this user from liability related to the DAO, given them a separate legal personality to manage the DAO's affairs (providing privacy), and protect them from personal liability related to these affairs, as well. To establish such DAO representative relationships with more legal backing, it is recommended to consult and execute an agreement such as [this form of DAO Representation Agreement](https://github.com/kalidao/kali-legal/blob/main/ops/RepresentationAgreement.md).

DAOs may also "wrap" their membership (often represented by token balances held by a public key account) into an LLC, treating tokens as membership units under the terms of their LLC operating agreement.

A Wrappr user might in this case attach an LLC NFT to their DAO treasury or multi-sig. The terms of the Master operating agreement backing the Wrappr LLC NFTs will treat the key holders governing such shared account as LLC members and their collected assets and transactions as those of the LLC. This streamlines the operation of the LLC and provides automated accounting, a blockchain superpower.

### Do LLCs Centralize DAOs?

Since DAOs and LLCs share common structuring through private ordering (*i.e.*, membership and operating rules are set by agreement), the mere creation of an LLC does not centralize the membership but simply provides an IRL interface and legal name to the DAO. Essentially, a DAO is already an operating agreement represented by code--an LLC just provides a legal identity to this code to deal with the public. Anonymity is not compromised--membership is not disclosed to the state or anyone. In using Wrappr LLC NFTs, the DAO also is not required to hire any representatives to manage off-chain affairs, providing even greater privacy to DAOs. At the end of the day, the DAO LLC can be converted to another entity structure or discarded at any time by the DAO members, preserving autonomy.

### Opening Bank Accounts

Opening a bank account and obtaining an EIN for LLCs can be handled by the [LexDAO Clinic](https://yrcwg46jgjy.typeform.com/to/FEZ9cFhM). (Note, you will need an EIN for banking and taxes.)

Users can also receive their EIN by [filling out a basic form online](https://www.irs.gov/businesses/small-businesses-self-employed/apply-for-an-employer-identification-number-ein-online).

Note, when you apply for your EIN, you should ensure that the name you apply with clearly denotes that your LLC is a Series LLC and reflects the jurisdiction of formation (Delaware or Wyoming). For Delaware naming, this can be done using the format: `[Your Name] LLC, a Series of Wrappr LLC`, and for Wyoming, the name attached to your Series operating agreement, such as `Wrappr LLC – [Your Name] – Series 1`.

[Mercury](https://mercury.com/web3) also provides a [web3-friendly application form](https://mercury.com/signup) to get started and quickly setup banking for LLC DAOs.

### Handling Taxes

The maintenance of the Wrappr LLC filings, registered agent and annual State franchise tax is handled by the [KALI](https://www.kali.gg/) team for the public benefit. This means that you don't need to pay taxes to Delaware or Wyoming on the LLC registration or any other maintenance fees. Your tax obligations will be with regard to your own members and any income generated by your LLC, which will involve filing an annual report to the IRS and preparing K-1s for members.

Annual reports and issuing partnership K-1s for LLC members can be handled by the [LexDAO Clinic](https://yrcwg46jgjy.typeform.com/to/FEZ9cFhM), or if the LLC wants to be taxed as a corporation to simplify accounting, such filings can be similarly handled and taken off your plate.

### Onboarding Investors

Purchases of shares in your LLC for investment purposes should respect local law and applicable regulations. It is recommended to retain counsel if the Wrappr LLC is formed for the purposes of raising funds for group investment or to capitalize a team operating the LLC to develop a product or provide services. LexDAO maintains a [curated list of counsel](https://www.lexdao.coop/#/directory), with practice areas and jurisdictions for public reference.

While automated investor onboarding processes are added to the Wrappr application in partnership with [kycDAO](https://twitter.com/kycdao), users can also take advantage of [KALI](https://kali.gg/) open source legal forms for self-certification of investors in private sales (*i.e.*, not marketed to general public), provided [here](https://github.com/kalidao/kali-legal/blob/main/ops/fundraise/AccreditationQuestionnaire.md). If the sale is public and not handled through private marketing to your network, taking advantage of the Wrappr whitelisted minting and transfers is recommended, as well as obtaining a letter of accreditation for each investor, a form of which is [provided here](https://github.com/kalidao/kali-legal/blob/main/ops/fundraise/AccreditationLetter.md) and can be filled out by your counsel. If you have more questions do not hesitate to reach out to the KALI team (contact@kali.gg). 

### DAO LLC Examples

Examples of DAO LLCs in the wild include [MetaCartel Ventures](https://github.com/metacartel/MCV/blob/master/Legal/Grimoire%20and%20Exhibits/MCV-Grimoire-Final-All-Exhihbits.pdf) and [The LAO](https://medium.com/openlawofficial/the-lao-a-for-profit-limited-liability-autonomous-organization-9eae89c9669c) investment clubs.
