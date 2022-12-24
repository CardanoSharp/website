"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[942],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),l=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(o.Provider,{value:t},e.children)},p="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(n),u=a,m=p["".concat(o,".").concat(u)]||p[u]||y[u]||s;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d[p]="string"==typeof e?e:a,i[1]=d;for(var l=2;l<s;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},7622:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const s={sidebar_position:4},i="Create Addresses",d={unversionedId:"addresses",id:"addresses",title:"Create Addresses",description:"Once you have your keys, you will want to generate addresses. There are a few different addresses you may want to create.",source:"@site/docs/addresses.md",sourceDirName:".",slug:"/addresses",permalink:"/docs/addresses",draft:!1,editUrl:"https://github.com/CardanoSharp/website/blob/main/docs/addresses.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Derive and Create Keys",permalink:"/docs/keys"},next:{title:"Transactions",permalink:"/docs/category/transactions"}},o={},l=[{value:"Delegation/Base Address",id:"delegationbase-address",level:2},{value:"Enterprise Address",id:"enterprise-address",level:2},{value:"Staking Address",id:"staking-address",level:2},{value:"Shared/Script Addresses",id:"sharedscript-addresses",level:2},{value:"Delegation Shared/Script Address",id:"delegation-sharedscript-address",level:3},{value:"Enterprise Shared/Script Address",id:"enterprise-sharedscript-address",level:3}],c={toc:l};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-addresses"},"Create Addresses"),(0,a.kt)("p",null,"Once you have your keys, you will want to generate addresses. There are a few different addresses you may want to create."),(0,a.kt)("p",null,"Supported Address Types: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Delegation/Base"),(0,a.kt)("li",{parentName:"ul"},"Enterprise"),(0,a.kt)("li",{parentName:"ul"},"Rewards/Stake"),(0,a.kt)("li",{parentName:"ul"},"Deletegation/Base Shared"),(0,a.kt)("li",{parentName:"ul"},"Enterprised Shared")),(0,a.kt)("h2",{id:"delegationbase-address"},"Delegation/Base Address"),(0,a.kt)("p",null,"This address type is the most common. Since this address type requires the Stake keys along side the External or Internal keys, funds sent to these addresses will automatically contribute to the wallets staking."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using CardanoSharp.Wallet;\nusing CardanoSharp.Wallet.Enums;\nusing CardanoSharp.Wallet.Models.Keys;\nusing CardanoSharp.Wallet.Models.Addresses;\nusing CardanoSharp.Wallet.Extensions.Models;\nusing CardanoSharp.Wallet.Models.Derivations;\n\nIAccountNodeDerivation accountNode = new MnemonicService()\n    .Generate(24)\n    .GetMasterNode()\n    .Derive(PurposeType.Shelley)\n    .Derive(CoinType.Ada)\n    .Derive(0);\n\nIIndexNodeDerivation paymentNode = accountNode\n    .Derive(RoleType.ExternalChain)\n    .Derive(0);\npaymentNode.SetPublicKey();\n\nIIndexNodeDerivation stakingNode = accountNode\n    .Derive(RoleType.Staking)\n    .Derive(0);\nstakingNode.SetPublicKey();\n\nAddress delegationAddress = new AddressService()\n    .GetBaseAddress(\n        paymentNode.PublicKey,\n        stakingNode.PublicKey,\n        NetworkType.Testnet);\nConsole.WriteLine($"Delegation Address: {delegationAddress.ToString()}");\n')),(0,a.kt)("h2",{id:"enterprise-address"},"Enterprise Address"),(0,a.kt)("p",null,"The enterprise address utilizes only the External or Internal keys. Any funds sent here will not be able to be staked."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'// We are going to utilize the wallet created above\n\nAddress enterpriseAddress = new AddressService()\n    .GetEnterpriseAddress(\n        paymentNode.PublicKey,\n        NetworkType.Testnet);\nConsole.WriteLine($"Enterprise Address: {enterpriseAddress.ToString()}");\n')),(0,a.kt)("h2",{id:"staking-address"},"Staking Address"),(0,a.kt)("p",null,"The staking address is also known as the reward address. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'// Again utilizely the wallet created above\n\nAddress stakingAddress = new AddressService()\n    .GetRewardAddress(\n        stakingNode.PublicKey,\n        NetworkType.Testnet);\nConsole.WriteLine($"Staking/Reward Address: {stakingAddress.ToString()}");\n')),(0,a.kt)("h2",{id:"sharedscript-addresses"},"Shared/Script Addresses"),(0,a.kt)("p",null,"Shared/Script Addresses come out of CIP1845 (Multi-signature HD Wallets). These are the type of wallets that can have different rules among a collection of keys in order to spend funds. A good example would be a Treasury."),(0,a.kt)("h3",{id:"delegation-sharedscript-address"},"Delegation Shared/Script Address"),(0,a.kt)("p",null,"Lets start by creating a simple delegation script address that can be signed by one of two keys."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'using CardanoSharp.Wallet.Encoding;\nusing CardanoSharp.Wallet.Utilities;\nusing CardanoSharp.Wallet.Extensions;\nusing CardanoSharp.Wallet.Models.Transactions.Scripts;\nusing CardanoSharp.Wallet.TransactionBuilding;\n\n// Lets setup some wallets\nMnemonic mnemonic1 =\nnew MnemonicService().Restore("scale fiction sadness render fun system hunt skull awake neither quick uncle grab grid credit");\n\nMnemonic mnemonic2 =\nnew MnemonicService().Restore("harsh absorb lazy resist elephant social carry roof remember picture merry enlist regret major practice");\n\n// Derive all the needed keys\n// First lets derive all the Payment Keys for both wallets\nIIndexNodeDerivation paymentNode1 = mnemonic1.GetMasterNode()\n    .Derive(PurposeType.MultiSig)\n    .Derive(CoinType.Ada)\n    .Derive(0)\n    .Derive(RoleType.ExternalChain)\n    .Derive(0);\npaymentNode1.SetPublicKey();\nIIndexNodeDerivation paymentNode2 = mnemonic2.GetMasterNode()\n    .Derive(PurposeType.MultiSig)\n    .Derive(CoinType.Ada)\n    .Derive(0)\n    .Derive(RoleType.ExternalChain)\n    .Derive(0);\npaymentNode2.SetPublicKey();\n\nPublicKey paymentPub1 = paymentNode1.PublicKey;\nPublicKey paymentPub2 = paymentNode2.PublicKey;\n            \n// Next lets derive all the Staking Keys for both wallets\nIIndexNodeDerivation stakeNode1 = mnemonic1.GetMasterNode()\n    .Derive(PurposeType.MultiSig)\n    .Derive(CoinType.Ada)\n    .Derive(0)\n    .Derive(RoleType.Staking)\n    .Derive(0);\nstakeNode1.SetPublicKey();\nIIndexNodeDerivation stakeNode2 = mnemonic2.GetMasterNode()\n    .Derive(PurposeType.MultiSig)\n    .Derive(CoinType.Ada)\n    .Derive(0)\n    .Derive(RoleType.Staking)\n    .Derive(0);\nstakeNode2.SetPublicKey();\n\nPublicKey stakePub1 = stakeNode1.PublicKey;\nPublicKey stakePub2 = stakeNode2.PublicKey;\n\n// Generate payment hashes\nbyte[] paymentHash1 = HashUtility.Blake2b224(paymentPub1.Key);\nbyte[] paymentHash2 = HashUtility.Blake2b224(paymentPub2.Key);\n\n// Generate stake hashes\nbyte[] stakeHash1 = HashUtility.Blake2b224(stakePub1.Key);\nbyte[] stakeHash2 = HashUtility.Blake2b224(stakePub2.Key);\n\n// Create a Payment Policy Script with a type of Script Any\nScriptAny paymentPolicyScript = ScriptAnyBuilder.Create\n    .SetScript(NativeScriptBuilder.Create.SetKeyHash(paymentHash1))\n    .SetScript(NativeScriptBuilder.Create.SetKeyHash(paymentHash2))\n    .Build();\n    byte[] paymentPolicyId = paymentPolicyScript.GetPolicyId();\nstring bechPaymentPolicyId = Bech32.Encode(paymentPolicyId, "script");\nConsole.WriteLine($"Payment Policy Id: {bechPaymentPolicyId}");\n\n// Create a Stake Policy Script with a type of Script Any\nScriptAny stakePolicyScript = ScriptAnyBuilder.Create\n    .SetScript(NativeScriptBuilder.Create.SetKeyHash(stakeHash1))\n    .SetScript(NativeScriptBuilder.Create.SetKeyHash(stakeHash2))\n    .Build();\nbyte[] statkePolicyId = stakePolicyScript.GetPolicyId();\nstring bechStakePolicyId = Bech32.Encode(statkePolicyId, "script");\nConsole.WriteLine($"Stake Policy Id: {bechStakePolicyId}");\n        \n//Generate Address\nAddress delegationScriptAddress = new AddressService().GetBaseScriptAddress(paymentPolicyScript, stakePolicyScript, NetworkType.Testnet);\nConsole.WriteLine($"Shared/Script Address: {delegationScriptAddress.ToString()}");\n')),(0,a.kt)("h3",{id:"enterprise-sharedscript-address"},"Enterprise Shared/Script Address"),(0,a.kt)("p",null,"Just like a normal enterprise address, we just need to remove the staking piece to generate the address."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-cs"},'//Generate Address\nAddress enterpriseScriptAddress = new AddressService().GetEnterpriseScriptAddress(stakePolicyScript, NetworkType.Testnet);\nConsole.WriteLine($"Shared/Script Address: {enterpriseScriptAddress.ToString()}");\n')))}p.isMDXComponent=!0}}]);