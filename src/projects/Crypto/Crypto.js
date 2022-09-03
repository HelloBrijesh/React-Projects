import "../../App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios";
import Coin from "./Coin";

function Crypto() {
  const [listOfCoins, setListOfCoins] = useState([]);
  const [searchCoin, setSeachCoin] = useState("");

  useEffect(() => {
    Axios.get("https://api.coinstats.app/public/v1/coins?skip=0").then((res) => {
      setListOfCoins(res.data.coins);
    });
  }, []);

  const filterCoin = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchCoin.toLowerCase());
  });

  return (
    <div className="App">
      <div className="cryptoHeader">
        <input type="text" placeholder="Search coin" onChange={(e) => setSeachCoin(e.target.value)}></input>
      </div>
      <div className="cryptoDisplay">
        {filterCoin.map((coin) => {
          return <Coin name={coin.name} icon={coin.icon} price={coin.price} symbol={coin.symbol} />;
        })}
      </div>
    </div>
  );
}

export default Crypto;
