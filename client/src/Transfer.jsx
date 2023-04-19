import { useState } from "react";
import server from "./server";

function Transfer({ balance, setBalance, address, sendAmount, setSendAmount, recipient, setRecipient}) {

  const setValue = (setter) => (evt) => setter(evt.target.value);

  async function onChangeSendAmount(evt) {
    if(evt.target.value < 0 || evt.target.value > balance){
      // setSendAmount(0);
      alert("Balance Insufficient.")
    } else {
      setSendAmount(evt.target.value.replace(/^0+/, ''))
    }
  }

  async function transfer(evt) {
    evt.preventDefault();
    if (!recipient || recipient.length != 40){
      alert("Invalid recipient address."); return;
    }
    
    try {
      const {
        data: { balance },
      } = await server.post(`send`, {
        sender: address,
        amount: parseInt(sendAmount),
        recipient,
      });
      setBalance(balance);
    } catch (ex) {
      alert(ex.response.data.message);
    }
  }

  return (
    <form className="container transfer" onSubmit={transfer}>
      <h1>Send Transaction</h1>

      <label>
        Send Amount
        <input type="number"
          placeholder="1, 2, 3..."
          value={sendAmount}
          onChange={onChangeSendAmount}
          disabled={!address || !balance}
          min={1}
        ></input>
      </label>

      <label>
        Recipient
        <input
          placeholder="Type an address, for example: 0x2"
          value={recipient}
          onChange={setValue(setRecipient)}
          disabled={!address || !balance}
        ></input>
      </label>

      <input type="submit" className="button" value="Transfer" disabled={!recipient || !sendAmount}/>
    </form>
  );
}

export default Transfer;
