import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Coin from './Coin';

const Home = () => {
    const [coinsList, setCoinsList] = useState([]);
    const [searchCoin, setSearchCoin] = useState('');

    useEffect(() => {
    axios
    .get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(results => {
        setCoinsList(results.data);

    }).catch(
        error => console.log(error));
},[]);

const onChangeSearch = e => {
    setSearchCoin(e.target.value)
}

const filterTheCoins = coinsList.filter(coin => 
   coin.name.toLowerCase().includes(searchCoin.toLowerCase()))

    return(
        <div className="coin-app">
            <div>
                <h1 className="coin-text">Search a coins</h1>
                <form>
                    <input type="text" placeholder="Bitcoin" className="coin-input" onChange={onChangeSearch}></input> 

                </form>
            </div>
            {filterTheCoins.map(coin => {
                return( 
                   <Coin 
                    key={coin.id} 
                    name={coin.name} 
                    image={coin.image} 
                    symbol={coin.symbol} 
                    volume={coin.market_cap} 
                    price={coin.current_price} 
                    /> 
                )
            })}
        </div>
    )
}

export default Home;