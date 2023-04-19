import Wallet from "./Wallet";
import Transfer from "./Transfer";
import "./App.scss";
import { useState } from "react";

function App() {
  const [balance, setBalance] = useState(0);
  const [address, setAddress] = useState("");
  const [signMessage, setSignMessage] = useState("");

  const [sendAmount, setSendAmount] = useState(0);
  const [recipient, setRecipient] = useState("");

  return (
    <div className="app">
      <Wallet
        balance={balance}
        setBalance={setBalance}
        address={address}
        setAddress={setAddress}
        signMessage={signMessage}
        setSignMessage={setSignMessage}
        recipient = {recipient}
        setRecipient= {setRecipient}
        sendAmount={sendAmount}
        setSendAmount = {setSendAmount}
      />
      <Transfer balance={balance} setBalance={setBalance} address={address} 
      sendAmount={sendAmount} setSendAmount={setSendAmount} recipient={recipient} setRecipient={setRecipient} />
    </div>
  );
}

export default App;
