import server from "./server";
import * as secp from "ethereum-cryptography/secp256k1";
import * as utils from "ethereum-cryptography/utils";
import * as keccak from "ethereum-cryptography/keccak";

function Wallet({ balance, setBalance, address, setAddress, signMessage, setSignMessage, recipient, setRecipient, sendAmount, setSendAmount}) {
  const hashMessage =  hashingMessage("sample");
  async function onChange(evt) {
    const signMessage = evt.target.value;
    setSignMessage(signMessage);
    if (signMessage) {
      //if having sign message, try to convert it into public key
      recoverPublicAddress(signMessage).then(async x => {
        if (x) {
          const address = getEthereumStyleAddress(x);
          setAddress(address);
          const {
            data: { balance },
          } = await server.get(`balance/${address}`);
          setBalance(balance);
        }
      }).catch(ex => {
          setAddress("");
          setBalance(0);
          setRecipient("");
          setSendAmount(0);
      });
    } else {
      setAddress("");
      setBalance(0);
      setRecipient("");
      setSendAmount(0);
    }
  }

  async function recoverPublicAddress(signMessage){
    return await secp.recoverPublicKey(hashMessage, signMessage, 1)
  }

  //temp hashing a hardcoded message
  function hashingMessage(message){
    let bytes = utils.utf8ToBytes(message);
    let hashMessage = keccak.keccak256(bytes);
    return hashMessage;
  }

  function getEthereumStyleAddress(publicKey){
    let removeFirstByte = publicKey.slice(1);
    let hashAddress = keccak.keccak256(removeFirstByte);
    return utils.toHex(hashAddress.slice(hashAddress.length - 20));
}

  return (
    <div className="container wallet">
      <h1>Your Wallet</h1>
      <label><small>Enter your Sign Message</small></label>
      <input placeholder="Type a sign message.." value={signMessage} onChange={onChange}></input>
      <div className="balance"><small>Address: {address ? address.slice(0,30) + "...": "-"}</small></div>
      <div className="balance"><small>Balance: {balance}</small></div>
    </div>
  );
}

export default Wallet;
