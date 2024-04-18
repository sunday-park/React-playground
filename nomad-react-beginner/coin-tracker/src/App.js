import { useState, useEffect } from 'react';
import axios from 'axios'

function App() {
  
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(()=>{
    axios.get("https://api.coinpaprika.com/v1/tickers")
    .then((res) => {
      setCoins(res.data);
      setLoading(false);
    })
    .catch((err) => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1>The Coins ({coins.length})</h1>
      {loading ? <strong>Loading...</strong> : 
        <select>
          {coins.map((coin) => {
            return (
              <option key={coin.rank}>
                {coin.name} ({coin.symbol}): ${Math.round(coin.quotes.USD.price)}
              </option>
            )
          })}
        </select>
      }
    </div>
  )
}

export default App;
