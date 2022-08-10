(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{452:function(t,e,a){"use strict";a.r(e);var o=a(66),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"the-basics"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-basics"}},[t._v("#")]),t._v(" The Basics")]),t._v(" "),a("h2",{attrs:{id:"installation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[t._v("#")]),t._v(" Installation")]),t._v(" "),a("p",[t._v("Before you get started writing Huff you will have to install the compiler. Head over to "),a("a",{attrs:{href:"https://docs.huff.sh/get-started/overview/",target:"_blank",rel:"noopener noreferrer"}},[t._v("getting started"),a("OutboundLink")],1),t._v(" and follow the steps to get it installed.\nOnce complete - come back here!!")]),t._v(" "),a("h2",{attrs:{id:"what-you-are-going-to-learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-you-are-going-to-learn"}},[t._v("#")]),t._v(" What you are going to learn?")]),t._v(" "),a("p",[t._v('Unlike other programming languages, creating a Huff contract that returns "Hello, world!" is quite advanced! To keep things simple we are going to learn how to create a Huff contract that adds two numbers (then we will dive into "Hello, world!").\nOpen up your editor and create a file called '),a("code",[t._v("addTwo.huff")]),t._v(". Lets jump in.")]),t._v(" "),a("h2",{attrs:{id:"add-two"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-two"}},[t._v("#")]),t._v(" Add Two")]),t._v(" "),a("h3",{attrs:{id:"abi-declaration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#abi-declaration"}},[t._v("#")]),t._v(" ABI declaration")]),t._v(" "),a("p",[t._v('First things first. If you\'re coming from a higher level language like Solidity or Vyper you will be familiar with defining "external" or "public" functions. These allow you to interact with a contract externally by generating an ABI (Application Binary Interface). This describes a contracts entry points to external tools (We will dive more into this later). In this aspect Huff is exactly the same, you can declare functions that will appear in the abi at the top of the file.')]),t._v(" "),a("div",{staticClass:"language-Huff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#define function addTwo(uint256, uint256) view returns(uint256)\n")])])]),a("p",[t._v("Go ahead and paste the above example at the top of "),a("code",[t._v("addTwo.huff")]),t._v(". This declares a function that takes two "),a("code",[t._v("uint256")]),t._v(" inputs and returns a single "),a("code",[t._v("uint256")]),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"the-main-macro"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-main-macro"}},[t._v("#")]),t._v(" The Main Macro")]),t._v(" "),a("p",[t._v("The next thing we are going to create is the "),a("code",[t._v("MAIN macro")]),t._v(". This serves a single entry point for Huff contracts. All calls to a contract (regardless of what function they are calling) will start from "),a("code",[t._v("MAIN")]),t._v("! In this example we will define a "),a("code",[t._v("MAIN")]),t._v(" function that will read two "),a("code",[t._v("uint256")]),t._v("'s from calldata and return their result.")]),t._v(" "),a("div",{staticClass:"language-Huff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#define macro MAIN() = takes(0) returns(0) {\n    0x00 calldataload     // [number1] // load first 32 bytes onto the stack - number 1\n    0x20 calldataload     // [number2] // load second 32 bytes onto the stack - number 2\n    add                   // [number1+number2] // add number 1 and 2 and put the result onto the stack\n\n    0x00 mstore           // place [number1 + number2] in memory\n    0x20 0x00 return      // return the result\n}\n")])])]),a("p",[t._v("Looking at the above snippet may be intimidating at first, but bear with us.")]),t._v(" "),a("p",[t._v("You'll notice that the MAIN directive is annotated with "),a("code",[t._v("takes(0) returns(0)")]),t._v(". As the EVM is a stack based virtual machine (see: "),a("a",{attrs:{href:"https://docs.huff.sh/tutorial/evm-basics/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Understanding the EVM"),a("OutboundLink")],1),t._v("), all macro declarations are annotated with the number of items they will "),a("code",[t._v("take")]),t._v(" from the stack and the amount they will "),a("code",[t._v("return")]),t._v(" upon completion. When entering the contract the stack will be empty. Upon completion we will not be leaving anything on the stack; therefore, takes and returns will both be 0.")]),t._v(" "),a("p",[t._v("Go ahead and copy the above macro into your "),a("code",[t._v("addTwo.huff")]),t._v(" file. Run "),a("code",[t._v("huffc addTwo.huff --bytecode")]),t._v(".")]),t._v(" "),a("p",[t._v("Congratulations you've just compiled your first contract!")]),t._v(" "),a("p",[t._v("The bytecode output of the compiler will echo the following into the console "),a("code",[t._v("600f8060093d393df36000356020350160005260206000f3")]),t._v(".")]),t._v(" "),a("p",[t._v("When you deploy this contract code it will have the runtime bytecode of the main macro we just created! In the above snippet you will find it after the first "),a("code",[t._v("f3")]),t._v(" (the preceding bytecode is boiler plate constructor logic.)\nThat leaves us with this: "),a("code",[t._v("6000356020350160005260206000f3")]),t._v("\nBelow, this example dissembles what you have just created!")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v(" BYTECODE          MNEMONIC         STACK                 ACTION\n 60 00          // PUSH1 0x00       // [0x00]\n 35             // CALLDATALOAD     // [number1]          Store the first 32 bytes on the stack\n 60 20          // PUSH1 0x20       // [0x20, number1]\n 35             // CALLDATALOAD     // [number2, number1] Store the second 32 bytes on the stack\n 01             // ADD              // [number2+number1]  Take two stack inputs and add the result\n 60 00          // PUSH1 0x00       // [0x0, (n2+n1)]\n 52             // MSTORE           // []                 Store (n2+n1) in the first 32 bytes of memory\n 60 20          // PUSH1 0x20       // [0x20]\n 60 00          // PUSH1 0x00       // [0x20, 0x00]\n f3             // RETURN           // []                 Return the first 32 bytes of memory\n")])])]),a("p",[t._v("If you want to step through the execution yourself you can check out this snippet interactively in "),a("a",{attrs:{href:"https://www.evm.codes/playground?unit=Wei&codeType=Bytecode&code='~3560203501~526020~f3'~6000%01~_",target:"_blank",rel:"noopener noreferrer"}},[t._v("evm.codes"),a("OutboundLink")],1),t._v(" (pass in the calldata "),a("code",[t._v("0x00000000000000000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000002")]),t._v(" and click RUN to get started). This calldata is the numbers 1 and 2, both padded to 32 bytes. After running this snippet, you should end up with a return value of "),a("code",[t._v("0000000000000000000000000000000000000000000000000000000000000003")]),t._v(". Which is expected! "),a("code",[t._v("addTwo.huff")]),t._v(" successfully added the numbers 1 and 2, returning 3! If you are new to working with assembly, I strongly suggest you do this as visualizing the individual instructions helps tremendously with learning.")]),t._v(" "),a("p",[t._v("In the next section we will walk through your contract's execution given that you provide the calldata for 2 + 3. Encoded into uint256's (32 bytes) the number 2 would become "),a("code",[t._v("0000000000000000000000000000000000000000000000000000000000000002")]),t._v(" and the number 3 would become "),a("code",[t._v("0000000000000000000000000000000000000000000000000000000000000003")]),t._v(".")]),t._v(" "),a("p",[t._v("This is illustrated in the table below:")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Value")]),t._v(" "),a("th",[t._v("As calldata")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("2")]),t._v(" "),a("td",[t._v("0000000000000000000000000000000000000000000000000000000000000002")])]),t._v(" "),a("tr",[a("td",[t._v("uint256")]),t._v(" "),a("td",[t._v("3")]),t._v(" "),a("td",[t._v("0000000000000000000000000000000000000000000000000000000000000003")])])])]),t._v(" "),a("p",[t._v("By putting the two together, we will send the following calldata to the contract.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("0x00000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000003\n")])])]),a("h3",{attrs:{id:"execution-walk-through"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#execution-walk-through"}},[t._v("#")]),t._v(" Execution Walk Through")]),t._v(" "),a("p",[a("em",[a("strong",[t._v("Line 1:")])]),t._v(" "),a("code",[t._v("0x00 calldataload")])]),t._v(" "),a("p",[t._v("This line reads the first 32 bytes of calldata onto the stack. The "),a("code",[t._v("calldataload")]),t._v(" opcode takes a calldata offset from the stack as it's input and returns 32bytes from that offset onto the stack.")]),t._v(" "),a("p",[a("em",[t._v("Stack after operation:")]),t._v(" "),a("code",[t._v("[2]")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("em",[a("strong",[t._v("Line 2:")])]),t._v(" "),a("code",[t._v("0x20 calldataload")])]),t._v(" "),a("p",[t._v("Similarly, the second line reads the second 32 bytes of our calldata. By pushing the hex number  "),a("code",[t._v("0x20")]),t._v(" (32) onto the triggering "),a("code",[t._v("calldataload")]),t._v(".")]),t._v(" "),a("p",[a("em",[t._v("Stack after operation:")]),t._v(" "),a("code",[t._v("[3,2]")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("em",[a("strong",[t._v("Line 3:")])]),t._v(" "),a("code",[t._v("add")])]),t._v(" "),a("p",[t._v("The third line of our calls the add opcode. This will take the top two items from the stack as inputs and return the sum of those two numbers. For the inputs "),a("code",[t._v("[3,2]")]),t._v(" the result is "),a("code",[t._v("[5]")])]),t._v(" "),a("p",[a("em",[t._v("Stack after operation")]),t._v(" "),a("code",[t._v("[5]")])]),t._v(" "),a("hr"),t._v(" "),a("p",[a("em",[a("strong",[t._v("Lines 4 and 5")])]),t._v("\nThe remainder of the contract is concerned with returning the result. EVM contracts can only return values that have been stored within the current executions memory frame. This is as the return opcode takes two values as inputs. The offset of memory to start returning from, and the length of memory to return.\nIn this case the "),a("code",[t._v("return")]),t._v(" opcode will consume "),a("code",[t._v("[0x20, 0x00]")]),t._v(". Or 32 bytes in memory starting from byte 0.")]),t._v(" "),a("p",[t._v("This explains what "),a("code",[t._v("0x00 mstore")]),t._v(" is there for. "),a("code",[t._v("mstore")]),t._v(" takes two items from the stack, "),a("code",[t._v("[location_in_memory, value]")]),t._v(". In our case we have "),a("code",[t._v("[0x00, 0x5]")]),t._v(", this stores the value 5 into memory.")]),t._v(" "),a("hr"),t._v(" "),a("h3",{attrs:{id:"interacting-with-this-contract-externally"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#interacting-with-this-contract-externally"}},[t._v("#")]),t._v(" Interacting with this contract externally")]),t._v(" "),a("p",[t._v("As mentioned before, EVM contracts use an ABI to determine which function should be called. Currently, people interacting with addTwo's execution is linear, allowing only one functionality. Most contracts will want to have more than one function. In order to accommodate for this we will have to do a little bit of restructuring.")]),t._v(" "),a("p",[t._v("The contract ABI specification dictates that contract calls will select which function they want to call by appending a 4 byte (function selector) to their calls. The 4 bytes are sliced from the start of the keccak of the function's abi definition. For example, "),a("code",[t._v("addTwo(uint256,uint256)")]),t._v("'s function selector will become "),a("code",[t._v("0x0f2d66e")]),t._v(" (You can confirm this by using a command line tool such as "),a("a",{attrs:{href:"https://book.getfoundry.sh/cast/",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("cast")]),a("OutboundLink")],1),t._v("'s "),a("code",[t._v("sig")]),t._v(" command, or online sites such as "),a("a",{attrs:{href:"https://emn178.github.io/online-tools/keccak_256.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("keccak256 online"),a("OutboundLink")],1),t._v("). If you are curious as to what these look like you can find a registry of common 4byte function selectors in the "),a("a",{attrs:{href:"https://www.4byte.directory/",target:"_blank",rel:"noopener noreferrer"}},[t._v("4 byte directory"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h4",{attrs:{id:"modifying-our-contract-to-accept-external-function-calls"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#modifying-our-contract-to-accept-external-function-calls"}},[t._v("#")]),t._v(" Modifying our contract to accept external function calls")]),t._v(" "),a("p",[t._v("To accept external calls for multiple functions we will have to extract our "),a("code",[t._v("addTwo")]),t._v(" logic into another macro. Then convert our "),a("code",[t._v("MAIN")]),t._v(" macro into a function dispatcher.")]),t._v(" "),a("div",{staticClass:"language-Huff extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("#define function addTwo(uint256,uint256) view returns(uint256)\n\n#define macro MAIN() = takes(0) returns(0) {\n\n    // Get the function selector\n    0x00\n    calldataload\n    0xE0\n    shr\n\n    // Jump to the implementation of the ADD_TWO function if the calldata matches the function selector\n    __FUNC_SIG(addTwo) eq addTwo jumpi\n\n    addTwo:\n        ADD_TWO()\n}\n\n#define macro ADD_TWO() = takes(0) returns(0) {\n    0x04 calldataload     // load first 32 bytes onto the stack - number 1\n    0x24 calldataload     // load second 32 bytes onto the stack - number 2\n    add                   // add number 1 and 2 and put the result onto the stack\n\n    0x00 mstore           // place the result in memory\n    0x20 0x00 return      // return the result\n}\n")])])]),a("p",[t._v("The first modifications we make will be within the ADD_TWO macro. On lines 1 and 2 we will shift the calldata offset by 4 bytes for both numbers, this is due to the 4 byte function selector that will be prepended to the calldata value.")]),t._v(" "),a("p",[t._v("Our "),a("code",[t._v("MAIN")]),t._v(" macro has changed drastically.\nThe first 4 lines are concerned with isolating the function selector from the calldata.")]),t._v(" "),a("ol",[a("li",[a("code",[t._v("0x00")]),t._v(" pushed "),a("code",[t._v("[0]")]),t._v(" onto the stack")]),t._v(" "),a("li",[a("code",[t._v("calldataload")]),t._v(" takes "),a("code",[t._v("[0]")]),t._v(" as input and pushes the first 32 bytes of calldata onto the stack")]),t._v(" "),a("li",[a("code",[t._v("0xE0")]),t._v(" pushes "),a("code",[t._v("[224]")]),t._v(" onto the stack. This magic number represents 256 bits - 32 bits (28 bytes).")]),t._v(" "),a("li",[t._v("When followed by the shr this will shift out calldata by 28 bytes and place the function selector onto the stack.")])]),t._v(" "),a("p",[t._v("The following lines will match the function selector on the stack and then jump to the code location where that code is. Huff handles generating all jump logic for you.")]),t._v(" "),a("p",[t._v("Under the hood the ADD_TWO() macro bytecode will be inlined of ADD_TWO() in the main macro.")]),t._v(" "),a("p",[t._v("Now you should be able to use libraries like ethers, or other contracts to call your contract!")]),t._v(" "),a("p",[t._v("We hope this gives you a good understanding of the main concepts and all of the boiler plate you need to get started in Huff!")]),t._v(" "),a("p",[t._v('Next up, we\'ll dive into more advanced Huff by creating a contract that returns a "Hello, world!" string!')])])}),[],!1,null,null,null);e.default=n.exports}}]);