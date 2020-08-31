require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock other sugar fan renew stick slow good clog metal gather'; 
let testAccounts = [
"0xb905e14ca561649121f628e4b6a198027450b60dd9c49b552b3072c2d190466f",
"0x8f2afcb5eb583f04e666a3976b587758d231928f5957badd6580bbdbc184e481",
"0x4225033e2b75c5b0ae1d138f982de59d824a8c5665d080c2aaa59a76c25ee8c1",
"0xb139c2e1e160ed2ae3ee9346580f1581668dc804e673261957530185aa214f64",
"0x056be34c4e31f5d114d4ee3d535b5d640a07e8de6267f34f13c8e8f5f7abce9f",
"0x6ca588a0378f91396f90e2467776ccc84516de948ef93c380e666ff501547b3a",
"0xd77ab1c4d9d58b35d01d7790231c92b37751e3c14bd5cd76f337f84827166733",
"0x98e1e8c2e02fbf0808432f6cbd1b131e2606ab738622fdcd97e93a6ac8cfd35b",
"0xaa366545051a2de30ec93135dd33e3f02511c5fdb71b4576220c321dd020a449",
"0xdfd701345e5870acb9307d363a2a7238ab4713f3a9db362b4e75fd1720aba873"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
