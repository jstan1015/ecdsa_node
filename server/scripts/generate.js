const secp = require("ethereum-cryptography/secp256k1");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");
const { keccak256 } = require("ethereum-cryptography/keccak");

const privateKey = secp.utils.randomPrivateKey();
console.log('private key:', toHex(privateKey));

const publicKey = secp.getPublicKey(privateKey);
console.log('public key:', getEthereumStyleAddress(publicKey));

const signMessage = getSignMessage("sample", privateKey).then(x => {
    console.log('sign message:', toHex(x));
});



//get the last 20 bytes from the hash and convert it into hex (to get the eth style public address)
function getEthereumStyleAddress(publicKey){
    let removeFirstByte = publicKey.slice(1);
    let hashAddress = keccak256(removeFirstByte);
    return toHex(hashAddress.slice(hashAddress.length - 20));
}

//for the usage of sign message
function hashMessage(message){
    let bytes = utf8ToBytes(message);
    let hashMessage = keccak256(bytes);
    return hashMessage;
}

async function getSignMessage(message, privateKey){
    let result = hashMessage(message);
    return await secp.sign(result, privateKey, {recovery: true})
}
//first pair
// private key: 8e2702a9c3abc4e156464c585fd476cdb70e75a2997b54dc7eec26559a6197fb
// public key: e448090bcd9fd5ae0dd106dc2979427d60aad3a4
// sign message: 3045022100c78d382948b307557c2197a8e9ab8ddc94473612bf666891ea1b253d14cb0fcd02203758db0630f6239d90941e85d35e4c19e5230577a21856c9b0210d73aad4663e

//second pair
// private key: ddca7682d0637cb52582b14c76b4aaad57f19893c0ca9b85a1e10599f0df07cd
// public key: 69ce11a751fbb04403ee1ff83e577f44ea86d20c
// sign message: 304402203f69535d8c3d72ff7cb172cb60b6ad15621930fc4f6980eadcd33ddd9fca15330220448cfd11ce91d56183f4c39fd5598fbcaf78caf251bb1570c3c8a00257a08f07

//third pair 
// private key: 9729b11b47f1fe033e8064c275f87286bf5f879a48b686abaa38e1fcd87bfde0
// public key: a923d18b5452008477e4c94e670434e618412353
// sign message: 3044022027dedabdfd0ece7de3d673c011274b7fb1975b5afe2bc64d323f65ed29d05c6a02204fb27a6776f2f7ea9bfcd76aac51a85024bc16bd2cc9d0b68357796caca29d65