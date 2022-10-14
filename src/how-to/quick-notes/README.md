# 📋 Quick Notes

The [KALI](https://www.kali.gg/) legal engineering team has drafted forms of Wrappr templates, starting with LLC, UNA, and DAO Charters.

Delaware and Wyoming have been selected initially for "pegged" templates because of their strong contract law and DAO friendliness.

*Stateless* or "unpegged" options are also listed to allow users to set org terms without formally adopting a legal entity or jurisdiction.

## ✒️ Legality of Key-signatures

Jurisdictions with neutral e-signature laws that should support cryptographic key-signatures (key-sign) include the United States, Canada, China, Australia, New Zealand, Cayman Islands, and BVI. Key-sign in these jurisdictions carries the same (or similar) legal weight as handwritten signatures as long as they satisfy general requirements of the specific country’s law.

In the U.S, for example, the E-Sign Act and the Uniform Electronic Transactions Acts (UETA) define “electronic signature” as “an electronic sound, symbol, or process, attached to or logically associated with a contract or record and executed or adopted by a person with the intent to sign the record.” Therefore, for electronic signatures to be qualified under U.S. law, signers have to demonstrate their intent to sign the document, and the signature must be electronically connected to the corresponding document signed and cannot be transmitted to anyone else or onto any other document.

Wrappr key-sign demonstrates user intent to be legally bound by providing smart contracts that record affirmation of text that can be reviewed on the Wrappr app. Each key-sign is logically connected to each user through their private key. These records are secure and immutable. Further, Wrappr agreements are identified by NFT tokenIds linked to each user account.

For Wrappr entity templates, such as LLC and UNA, U.S. law will be selected. For the best results in selecting unpegged templates, users should consider the above and opt for their choice of governing law to be e-sign neutral.

## ✋ FAQs

### 1) Why can any address in Ethereum be a Delaware LLC?

Any address (public key) can be a Delaware LLC because a public key is derived from a real person holding the private key and access to signatures. This is similar to how we can identify people on the internet using their email address and other IDs. In this way, we can have a public key and "wallet" act as a solo LLC. Or, in the case of a DAO or multi-sig that can also sign the Wrappr contracts, a member-managed LLC represented by the key signature set. Check out some of our [review of e-signature laws](https://docs.wrappr.wtf/how-to/quick-notes/#%E2%9C%92%EF%B8%8F-legality-of-key-signatures) and how they work with key signatures. 

### 2) Isn't there some kind of registration process needed in the real world, e.g. some kind of LLC ledger in actual Delaware?

In Wrappr, we have registered LLCs already as "Master" LLCs in Delaware and Wyoming. So, registration with the state is already taken care of. Series LLCs have been around since the 90s and are a really good format for internet-native companies. Check out some of our [research](https://mirror.xyz/kalico.eth/PjwUyaJsHZIvJ3RfSMghcw_FS1ohrrQuXmD9XI5GJtk) we commissioned that summarize the state of LLC law on this subject.

### 3) Is it okay that the NFT holder is pseudo anonymous?

Yes, Delaware and Wyoming are "anonymous" LLC states. They do not require the owner to be filed. It is worth noting, however, that in many cases, in order to conduct business as an LLC you will need to have some sort of representative

### 4) Is the NFT transferable and is that equal to transferring the ownership of the LLC?

Correct, the ownership of the NFT represents legal ownership of the LLC. This makes it convenient to attach legal assets to NFT. If you mint an NFT, you can actually store details about what your LLC owns off-chain in the token itself through our custom metadata functions (`setURI()`).

### 5) And what happens in case of disputes? Jurisdiction is Delaware so a court in Delaware can be called if a user wants to "sue" a Delaware LLC DAO?

The agreements for Wrappr LLCs do not require going to court. They in fact require arbitration in terms of any internal disagreements.



